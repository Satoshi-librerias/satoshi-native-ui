import type { FC, JSX } from "react";
import { View } from "react-native";
import { Container, Logo } from "@components/atoms";
import { getHeaderSurfaceClasses } from "../utils/get-header-surface-classes.util";
import { useHeaderNavigation } from "../hooks/use-header-navigation.hook";
import type { HeaderLogoConfig, HeaderProps } from "../types/header.types";
import type {
  HeaderLogoPosition,
  HeaderPosition,
  HeaderSurface,
} from "../types/header-layout.types";

/**
 * @description Define la configuracion resuelta del Header. * @author Steveen Cues
 * @version 1.0.0
 */
interface ResolvedHeaderConfig {
  readonly logo: HeaderLogoConfig | undefined;
  readonly showLogo: boolean;
  readonly logoPosition: HeaderLogoPosition;
  readonly position: HeaderPosition;
  readonly surface: HeaderSurface;
  readonly className: string;
}

/**
 * @description Renderiza la marca visible del Header.
 * @param config Configuracion resuelta del Header.
 * @returns Marca lista para renderizar o null.
 * @author Steveen Cues
 * @version 1.0.0
 */
function renderVisibleBrand(config: ResolvedHeaderConfig): JSX.Element | null {
  if (!config.showLogo || config.logo === undefined) {
    return null;
  }

  return (
    <Logo
      alt={config.logo.alt}
      height={config.logo.height}
      src={config.logo.src}
      width={config.logo.width}
    />
  );
}

/**
 * @description Indica si el logo se posiciona a la derecha de la barra.
 * @param logoPosition Posicion configurada del logo.
 * @returns True cuando el logo va a la derecha.
 * @author Steveen Cues
 * @version 1.0.0
 */
function isLogoRightFirst(logoPosition: HeaderLogoPosition): boolean {
  return logoPosition === "right";
}

/**
 * @description Resuelve la configuracion efectiva del Header combinando
 * las props recibidas con los valores por defecto.
 * @param props Props del Header.
 * @returns Configuracion resuelta.
 * @author Steveen Cues
 * @version 1.0.0
 */
function resolveHeaderConfig(props: HeaderProps): ResolvedHeaderConfig {
  return {
    logo: props.logo,
    showLogo: props.showLogo ?? true,
    logoPosition: props.logoPosition ?? "left",
    position: props.position ?? "static",
    surface: props.surface ?? "solid",
    className: props.className ?? "",
  };
}

/**
 * @description Renderiza el contenido de la barra con el orden del logo
 * segun su posicion configurada.
 * @param config Configuracion resuelta del Header.
 * @param brandBlock Bloque de marca y navegacion.
 * @returns Contenido de la barra.
 * @author Steveen Cues
 * @version 1.0.0
 */
function renderBarContent(
  config: ResolvedHeaderConfig,
  brandBlock: JSX.Element,
): JSX.Element {
  if (isLogoRightFirst(config.logoPosition)) {
    return (
      <>
        <View className="flex-1" />
        {brandBlock}
      </>
    );
  }

  return (
    <>
      {brandBlock}
      <View className="flex-1" />
    </>
  );
}

/**
 * @description Encabezado generico configurable. Permite mostrar u ocultar
 * el logo y la navegacion de forma independiente, con posicion y superficie
 * configurables e integracion de traduccion.
 * @example
 * <Header
 *   logo={{ src: logo, alt: t("common.brandAlt") }}
 *   navigationItems={[
 *     { label: t("navigation.home"), href: "/" },
 *     { label: t("navigation.about"), href: "/about" },
 *   ]}
 *   position="fixed"
 *   surface="transparent"
 *   logoPosition="right"
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Header: FC<HeaderProps> = (props): JSX.Element => {
  const config: ResolvedHeaderConfig = resolveHeaderConfig(props);

  const { navigation, labels } = useHeaderNavigation({
    items: props.navigationItems ?? [],
    showNavigation: props.showNavigation ?? true,
    translations: props.translations,
    onItemPress: props.onNavigationItemPress,
  });

  const brand = renderVisibleBrand(config);

  const brandBlock = (
    <View className="flex shrink-0 flex-row items-center gap-2">
      {brand}
      {navigation}
    </View>
  );

  const barContent = renderBarContent(config, brandBlock);

  return (
    <View
      accessibilityLabel={labels.navigationLabel}
      className={`${getHeaderSurfaceClasses(config.position, config.surface)} ${config.className}`.trim()}
    >
      <Container
        maxWidth="xl"
        align="between"
        padding="md"
        gap="sm"
        className="flex-nowrap"
      >
        {barContent}
        {props.additionalActions}
      </Container>
    </View>
  );
};

export default Header;
