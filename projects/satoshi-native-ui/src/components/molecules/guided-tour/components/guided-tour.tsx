import { useCallback, useState } from "react";
import type { FC, JSX } from "react";
import { Pressable, Text, View } from "react-native";
import { resolveStorage } from "@libs";
import type {
  GuidedTourProps,
  GuidedTourStep,
} from "../types/guided-tour.types";

/**
 * @description Clave de almacenamiento por defecto de la guia.
 * @author Steveen Cues
 * @version 1.0.0
 */
const DEFAULT_STORAGE_KEY = "satoshi-guided-tour-completed";

/**
 * @description Define el valor de porcentaje completo.
 * @author Steveen Cues
 * @version 1.0.0
 */
const PERCENTAGE_MAX = 100;

/**
 * @description Lee el indicador de guia completada.
 * @param storageKey Clave de almacenamiento de la guia.
 * @param hasSteps Indica si la guia tiene pasos configurados.
 * @returns True cuando la guia debe abrirse automaticamente.
 * @author Steveen Cues
 * @version 1.0.0
 */
function getInitialTourOpen(storageKey: string, hasSteps: boolean): boolean {
  if (!hasSteps) {
    return false;
  }

  try {
    return resolveStorage()?.getItem(storageKey) === null;
  } catch {
    return true;
  }
}

/**
 * @description Renderiza el dialogo de la guia con progreso y controles.
 * @param props Propiedades del dialogo.
 * @param props.step Paso actual de la guia.
 * @param props.activeStep Indice base cero del paso actual.
 * @param props.total Total de pasos.
 * @param props.translations Etiquetas traducidas.
 * @param props.onBack Accion de retroceso.
 * @param props.onNext Accion de avance.
 * @param props.onSkip Accion de omision.
 * @returns Dialogo de la guia listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
function GuidedTourDialog({
  step,
  activeStep,
  total,
  translations,
  onBack,
  onNext,
  onSkip,
}: {
  readonly step: GuidedTourStep;
  readonly activeStep: number;
  readonly total: number;
  readonly translations: GuidedTourProps["translations"];
  readonly onBack: () => void;
  readonly onNext: () => void;
  readonly onSkip: () => void;
}): JSX.Element {
  const stepOfLabel = translations.stepOf
    .replace("{current}", (activeStep + 1).toString())
    .replace("{total}", total.toString());

  return (
    <View
      accessibilityLabel={step.title}
      accessibilityRole="alert"
      className="mt-3 w-full rounded-2xl border border-base-300 bg-base-100 p-5"
    >
      <View
        accessibilityLabel={stepOfLabel}
        accessibilityRole="progressbar"
        className="h-2 w-full overflow-hidden rounded-full bg-base-200"
      >
        <View
          className="h-full rounded-full bg-primary"
          style={{
            width:
              `${(((activeStep + 1) / total) * PERCENTAGE_MAX).toString()}%` as `${number}%`,
          }}
        />
      </View>

      <Text className="mt-3 text-xs font-semibold uppercase tracking-wide text-primary">
        {stepOfLabel}
      </Text>

      <Text className="mt-2 text-lg font-semibold">{step.title}</Text>

      <Text className="mt-1 text-sm leading-6 text-base-content/70">
        {step.description}
      </Text>

      <View className="mt-3 flex-row flex-wrap items-center justify-between gap-2 border-t border-base-300 pt-3">
        <Pressable
          accessibilityRole="button"
          className="rounded-xl px-3 py-2"
          onPress={onSkip}
        >
          <Text className="text-sm">{translations.skip}</Text>
        </Pressable>

        <View className="flex-row gap-2">
          {activeStep > 0 && (
            <Pressable
              accessibilityRole="button"
              className="rounded-xl px-3 py-2"
              onPress={onBack}
            >
              <Text className="text-sm">{translations.back}</Text>
            </Pressable>
          )}

          <Pressable
            accessibilityRole="button"
            className="rounded-xl bg-primary px-4 py-2"
            onPress={onNext}
          >
            <Text className="text-sm text-primary-content">
              {activeStep === total - 1
                ? translations.finish
                : translations.next}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

/**
 * @description Presenta una guia inicial y permite volver a iniciarla.
 * La finalizacion se recuerda en el almacenamiento multiplataforma para
 * mostrarla automaticamente una sola vez.
 * @param props Propiedades de la molecula.
 * @param props.steps Pasos configurados de la guia.
 * @param props.translations Etiquetas traducidas de la guia.
 * @param props.storageKey Clave de almacenamiento de la guia.
 * @param props.enabled Indica si la guia esta habilitada.
 * @returns Guia de inicio lista para renderizar.
 * @example
 * <GuidedTour
 *   steps={[
 *     {
 *       targetId: "dashboard",
 *       title: t("tour.dashboard.title"),
 *       description: t("tour.dashboard.description"),
 *     },
 *   ]}
 *   translations={{
 *     openGuide: t("tour.open"),
 *     stepOf: t("tour.stepOf"),
 *     back: t("common.back"),
 *     next: t("common.next"),
 *     skip: t("common.skip"),
 *     finish: t("tour.finish"),
 *   }}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const GuidedTour: FC<GuidedTourProps> = ({
  steps,
  translations,
  storageKey = DEFAULT_STORAGE_KEY,
  enabled = true,
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState((): boolean =>
    getInitialTourOpen(storageKey, steps.length > 0),
  );
  const [activeStep, setActiveStep] = useState(0);

  const markCompleted = useCallback((): void => {
    try {
      resolveStorage()?.setItem(storageKey, "completed");
    } catch {
      // La persistencia de la guia no debe interrumpir la app.
    }

    setIsOpen(false);
  }, [storageKey]);

  const startTour = useCallback((): void => {
    setActiveStep(0);
    setIsOpen(true);
  }, []);

  const step: GuidedTourStep | undefined = steps.at(activeStep);
  const showTour = isOpen && enabled && step !== undefined;

  const handleNext = useCallback((): void => {
    if (activeStep === steps.length - 1) {
      markCompleted();
      return;
    }

    setActiveStep((current: number): number => current + 1);
  }, [activeStep, markCompleted, steps.length]);

  const handleBack = useCallback((): void => {
    setActiveStep((current: number): number => current - 1);
  }, []);

  return (
    <View>
      <Pressable
        accessibilityLabel={translations.openGuide}
        accessibilityRole="button"
        className="h-10 w-10 items-center justify-center rounded-full bg-primary"
        onPress={startTour}
      >
        <Text className="text-primary-content">{"?"}</Text>
      </Pressable>

      {showTour && step !== undefined && (
        <GuidedTourDialog
          activeStep={activeStep}
          onBack={handleBack}
          onNext={handleNext}
          onSkip={markCompleted}
          step={step}
          total={steps.length}
          translations={translations}
        />
      )}
    </View>
  );
};

export default GuidedTour;
