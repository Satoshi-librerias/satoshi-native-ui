import { memo, useCallback } from "react";
import type { FC, JSX } from "react";
import { Pressable, Text, View } from "react-native";
import {
  getStepperClasses,
  getStepperStepClasses,
} from "../utils/get-stepper-classes.util";
import {
  STEPPER_BASE_CLASS,
  STEPPER_LABEL_CLASS,
} from "../constants/stepper.constants";
import type { StepperProps, StepperStep } from "../types/stepper.types";

/**
 * @description Define las propiedades de un paso individual del stepper.
 * @author Steveen Cues
 * @version 1.0.0
 */
interface StepperStepItemProps {
  readonly step: StepperStep;
  readonly isCurrent: boolean;
  readonly isComplete: boolean;
  readonly isClickable: boolean;
  readonly onSelect: (() => void) | undefined;
}

/**
 * @description Renderiza el contenido del paso con su estado resuelto.
 * @param props Propiedades del paso.
 * @param props.step Paso configurado.
 * @param props.isCurrent Indica si es el paso actual.
 * @param props.isComplete Indica si el paso ya se completo.
 * @param props.isClickable Indica si el paso es interactivo.
 * @param props.onSelect Callback ejecutado al seleccionar el paso.
 * @returns Paso listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
function StepperStepItem({
  step,
  isCurrent,
  isComplete,
  isClickable,
  onSelect,
}: StepperStepItemProps): JSX.Element {
  const state = isComplete ? "complete" : "current";
  const resolvedState = isCurrent || isComplete ? state : "pending";
  const stepClasses = getStepperStepClasses({ state: resolvedState });

  const content = (
    <>
      <Text className={STEPPER_LABEL_CLASS}>{step.label}</Text>

      {step.description !== undefined && (
        <Text className="text-xs opacity-70 sm:inline">{step.description}</Text>
      )}
    </>
  );

  if (isClickable) {
    return (
      <View
        accessibilityRole="button"
        aria-current={isCurrent ? "step" : undefined}
        className={stepClasses}
      >
        <Pressable onPress={onSelect}>{content}</Pressable>
      </View>
    );
  }

  return (
    <View aria-current={isCurrent ? "step" : undefined} className={stepClasses}>
      {content}
    </View>
  );
}

/**
 * @description Renderiza el stepper con las propiedades resueltas.
 * @param props Propiedades de la molecula.
 * @param props.steps Pasos configurados.
 * @param props.currentId Identificador del paso actual.
 * @param props.orientation Orientacion del stepper.
 * @param props.ariaLabel Etiqueta accesible del stepper.
 * @param props.className Clases adicionales configuradas.
 * @param props.onStepClick Callback ejecutado al seleccionar un paso.
 * @returns Stepper listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
const StepperView = memo(function StepperView({
  steps,
  currentId,
  orientation,
  ariaLabel,
  className,
  onStepClick,
}: Required<
  Pick<StepperProps, "steps" | "currentId" | "orientation" | "className">
> &
  Pick<StepperProps, "ariaLabel" | "onStepClick">): JSX.Element {
  const foundIndex = steps.findIndex((step): boolean => step.id === currentId);
  const currentIndex = foundIndex === -1 ? 0 : foundIndex;

  const handleStepClick = useCallback(
    (id: string): void => {
      onStepClick?.(id);
    },
    [onStepClick],
  );

  const isNavigable = onStepClick !== undefined;

  return (
    <View accessibilityLabel={ariaLabel} className={STEPPER_BASE_CLASS}>
      <View
        className={`${getStepperClasses({ orientation })} ${className}`.trim()}
      >
        {steps.map((step, index) => (
          <StepperStepItem
            isClickable={isNavigable && index <= currentIndex + 1}
            isComplete={index < currentIndex}
            isCurrent={index === currentIndex}
            key={step.id}
            onSelect={
              isNavigable ? (): void => handleStepClick(step.id) : undefined
            }
            step={step}
          />
        ))}
      </View>
    </View>
  );
});

/**
 * @description Stepper accesible que muestra el progreso entre pasos con
 * estados completado, actual y pendiente, orientacion horizontal o
 * vertical y clases responsive de NativeWind.
 * @param props Propiedades de la molecula.
 * @param props.steps Pasos configurados con identificador y etiqueta.
 * @param props.currentId Identificador del paso actual; por defecto el
 * primer paso.
 * @param props.orientation Orientacion del stepper (horizontal, vertical).
 * @param props.ariaLabel Etiqueta accesible del stepper.
 * @param props.className Clases adicionales configuradas.
 * @param props.onStepClick Callback ejecutado al seleccionar un paso
 * alcanzable; su presencia habilita la navegacion por pasos.
 * @returns Stepper listo para renderizar.
 * @example
 * <Stepper
 *   steps={[
 *     { id: "cart", label: t("checkout.cart") },
 *     { id: "payment", label: t("checkout.payment") },
 *   ]}
 *   currentId={step}
 *   onStepClick={setStep}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Stepper: FC<StepperProps> = memo(
  function Stepper(props): JSX.Element {
    const firstStep = props.steps.at(0);
    const defaultCurrentId = firstStep?.id ?? "";

    return (
      <StepperView
        ariaLabel={props.ariaLabel}
        className={props.className ?? ""}
        currentId={props.currentId ?? defaultCurrentId}
        onStepClick={props.onStepClick}
        orientation={props.orientation ?? "horizontal"}
        steps={props.steps}
      />
    );
  },
);

export default Stepper;
