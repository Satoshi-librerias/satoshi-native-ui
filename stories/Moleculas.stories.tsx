import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {
  AccordionItem,
  Avatar,
  AvatarGroup,
  Badge,
  Breadcrumb,
  ButtonGroup,
  CalloutAction,
  Container,
  EmptyState,
  FormField,
  InputGroup,
  ListItem,
  Navigation,
  Pagination,
  SearchBar,
  SectionHeading,
  Stat,
  Stepper,
  Tabs,
  Toolbar,
} from "@components";

/**
 * @description Stories del atomo Container.
 * @author Steveen Cues
 * @version 1.0.0
 */
const containerMeta = {
  title: "Atomos/Container",
  component: Container,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default containerMeta;

type ContainerStory = StoryObj<typeof containerMeta>;

/**
 * @description Contenedor con ancho maximo y alineacion entre extremos.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ContainerBasico: ContainerStory = {
  args: {
    children: null,
  },
  render: () => (
    <Container align="between" maxWidth="lg" padding="md">
      <span>Inicio</span>
      <span>Fin</span>
    </Container>
  ),
};

/**
 * @description Stories del atomo AccordionItem.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const AccordionItemStories: StoryObj<Meta<typeof AccordionItem>> = {
  render: () => (
    <div className="flex w-96 flex-col gap-2">
      <AccordionItem isOpen={true} title="¿Como funciona el envio?">
        El envio tarda entre 3 y 5 dias habiles.
      </AccordionItem>
      <AccordionItem isOpen={false} title="¿Puedo devolver mi compra?">
        Tienes 30 dias para devoluciones.
      </AccordionItem>
      <AccordionItem isDisabled={true} title="Paso deshabilitado">
        Contenido no disponible.
      </AccordionItem>
    </div>
  ),
};

/**
 * @description Stories del atomo AvatarGroup.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const AvatarGroupStories: StoryObj<Meta<typeof AvatarGroup>> = {
  render: () => (
    <div className="flex flex-col gap-4">
      <AvatarGroup
        ariaLabel="Equipo"
        maxVisible={3}
        members={[
          { initials: "SC" },
          { initials: "AB" },
          { initials: "CD" },
          { initials: "EF" },
          { initials: "GH" },
        ]}
      />
      <AvatarGroup
        ariaLabel="Equipo grande"
        maxVisible={2}
        members={[{ initials: "SC" }, { initials: "AB" }, { initials: "CD" }]}
        size="lg"
      />
    </div>
  ),
};

/**
 * @description Stories del atomo Breadcrumb.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BreadcrumbStories: StoryObj<Meta<typeof Breadcrumb>> = {
  render: () => (
    <Breadcrumb
      items={[
        { label: "Inicio", href: "/" },
        { label: "Ajustes", href: "/settings" },
        { label: "Perfil" },
      ]}
    />
  ),
};

/**
 * @description Stories del atomo ButtonGroup.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ButtonGroupStories: StoryObj<Meta<typeof ButtonGroup>> = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup
        items={[
          { id: "day", label: "Dia" },
          { id: "week", label: "Semana" },
          { id: "month", label: "Mes" },
        ]}
        onSelect={fn()}
        selectedId="week"
      />
      <ButtonGroup
        items={[
          { id: "list", label: "Lista" },
          { id: "grid", label: "Cuadricula" },
        ]}
        onSelect={fn()}
        selectedId="list"
        size="sm"
        variant="primary"
      />
    </div>
  ),
};

/**
 * @description Stories del atomo CalloutAction.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CalloutActionStories: StoryObj<Meta<typeof CalloutAction>> = {
  render: () => (
    <div className="flex w-96 flex-col gap-3">
      <CalloutAction
        actionLabel="Mejorar plan"
        message="Tu prueba termina en 3 dias"
        onAction={fn()}
        variant="warning"
      />
      <CalloutAction
        actionLabel="Reintentar"
        message="No pudimos sincronizar tus datos"
        onAction={fn()}
        variant="error"
      />
      <CalloutAction
        actionLabel="Ver novedades"
        message="Nueva version disponible"
        onAction={fn()}
        variant="info"
      />
    </div>
  ),
};

/**
 * @description Stories del atomo EmptyState.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const EmptyStateStories: StoryObj<Meta<typeof EmptyState>> = {
  render: () => (
    <div className="flex w-96 flex-col gap-4">
      <EmptyState
        action={<button type="button">Crear proyecto</button>}
        description="Aun no tienes proyectos. Crea el primero para empezar."
        title="Sin proyectos"
      />
      <EmptyState title="Sin resultados" />
    </div>
  ),
};

/**
 * @description Stories del atomo FormField.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const FormFieldStories: StoryObj<Meta<typeof FormField>> = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <FormField label="Correo" onChange={fn()} type="email" />
      <FormField
        hint="Usa tu correo corporativo"
        label="Correo"
        onChange={fn()}
        type="email"
      />
      <FormField
        errorMessage="Correo invalido"
        label="Correo"
        onChange={fn()}
        type="email"
      />
    </div>
  ),
};

/**
 * @description Stories del atomo InputGroup.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const InputGroupStories: StoryObj<Meta<typeof InputGroup>> = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <InputGroup
        label="Precio"
        onChange={fn()}
        placeholder="0.00"
        prefix="$"
        type="number"
      />
      <InputGroup
        label="Peso"
        onChange={fn()}
        placeholder="0"
        suffix="kg"
        type="number"
      />
    </div>
  ),
};

/**
 * @description Stories del atomo ListItem.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ListItemStories: StoryObj<Meta<typeof ListItem>> = {
  render: () => (
    <div className="flex w-96 flex-col gap-2">
      <ListItem
        description="Administrador"
        end={<Badge variant="success">Activo</Badge>}
        onClick={fn()}
        start={<Avatar initials="SC" />}
        title="Steveen Cues"
      />
      <ListItem description="Sin acciones" title="Elemento estatico" />
      <ListItem
        description="No disponible"
        isDisabled={true}
        title="Elemento deshabilitado"
      />
    </div>
  ),
};

/**
 * @description Stories del atomo Navigation.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const NavigationStories: StoryObj<Meta<typeof Navigation>> = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Navigation
        items={[
          { label: "Inicio", href: "/" },
          { label: "Componentes", href: "/components" },
          { label: "Documentacion", href: "/docs" },
        ]}
      />
      <Navigation
        items={[
          { label: "Inicio", href: "/" },
          { label: "Acerca", href: "/about" },
        ]}
        orientation="vertical"
      />
    </div>
  ),
};

/**
 * @description Stories del atomo Pagination.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PaginationStories: StoryObj<Meta<typeof Pagination>> = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Pagination onPageChange={fn()} page={1} totalPages={5} />
      <Pagination onPageChange={fn()} page={5} totalPages={20} />
      <Pagination onPageChange={fn()} page={12} totalPages={30} size="sm" />
    </div>
  ),
};

/**
 * @description Stories del atomo SearchBar.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SearchBarStories: StoryObj<Meta<typeof SearchBar>> = {
  render: () => (
    <div className="flex w-96 flex-col gap-4">
      <SearchBar
        ariaLabel="Buscar"
        onChange={fn()}
        onSubmit={fn()}
        placeholder="Buscar..."
      />
      <SearchBar
        ariaLabel="Buscar"
        onChange={fn()}
        onSubmit={fn()}
        placeholder="Buscar..."
        size="sm"
        variant="ghost"
      />
    </div>
  ),
};

/**
 * @description Stories del atomo SectionHeading.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SectionHeadingStories: StoryObj<Meta<typeof SectionHeading>> = {
  render: () => (
    <div className="flex flex-col gap-6">
      <SectionHeading
        eyebrow="Panel"
        size="lg"
        subtitle="Metricas principales del periodo actual"
        title="Resumen general"
      />
      <SectionHeading
        action={<button type="button">Nuevo</button>}
        size="md"
        title="Seccion con accion"
      />
      <SectionHeading align="center" size="sm" title="Seccion centrada" />
    </div>
  ),
};

/**
 * @description Stories del atomo Stat.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const StatStories: StoryObj<Meta<typeof Stat>> = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Stat
        description="Este mes"
        title="Usuarios"
        value="1,204"
        variant="success"
      />
      <Stat description="Hoy" title="Ventas" value="$8,930" variant="primary" />
      <Stat
        description="Ultima semana"
        title="Reembolsos"
        value="12"
        variant="error"
      />
    </div>
  ),
};

/**
 * @description Stories del atomo Stepper.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const StepperStories: StoryObj<Meta<typeof Stepper>> = {
  render: () => (
    <div className="flex w-full flex-col gap-6">
      <Stepper
        currentId="payment"
        steps={[
          { id: "cart", label: "Carrito" },
          { id: "payment", label: "Pago" },
          { id: "done", label: "Listo" },
        ]}
      />
      <Stepper
        currentId="shipping"
        orientation="vertical"
        steps={[
          { id: "shipping", label: "Envio" },
          { id: "billing", label: "Facturacion" },
          { id: "review", label: "Revision" },
        ]}
      />
    </div>
  ),
};

/**
 * @description Stories del atomo Tabs.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TabsStories: StoryObj<Meta<typeof Tabs>> = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Tabs
        activeId="general"
        items={[
          { id: "general", label: "General" },
          { id: "security", label: "Seguridad" },
        ]}
        onChange={fn()}
      />
      <Tabs
        activeId="one"
        items={[
          { id: "one", label: "Uno" },
          { id: "two", label: "Dos" },
        ]}
        onChange={fn()}
        variant="lifted"
      />
    </div>
  ),
};

/**
 * @description Stories del atomo Toolbar.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ToolbarStories: StoryObj<Meta<typeof Toolbar>> = {
  render: () => (
    <div className="flex w-full flex-col gap-4">
      <Toolbar
        end={
          <ButtonGroup
            items={[
              { id: "list", label: "Lista" },
              { id: "grid", label: "Cuadricula" },
            ]}
            selectedId="list"
          />
        }
        start={<SearchBar placeholder="Buscar..." />}
        variant="bordered"
      />
      <Toolbar
        end={<button type="button">Accion</button>}
        start={<span>Titulo</span>}
        variant="ghost"
      />
    </div>
  ),
};
