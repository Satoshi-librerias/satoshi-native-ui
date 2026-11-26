import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {
  Alert,
  Avatar,
  AvatarGroup,
  Badge,
  Breadcrumb,
  ButtonGroup,
  CalloutAction,
  Card,
  Checkbox,
  Divider,
  EmptyState,
  FormField,
  Input,
  InputGroup,
  ListItem,
  Progress,
  SearchBar,
  SectionHeading,
  Stat,
  Stepper,
  Switch,
  Tabs,
  Textarea,
  Toolbar,
} from "@components";

/**
 * @description Galeria de atoms de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/Galeria",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Alertas con variantes semanticas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Alertas: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Alert variant="info">Mensaje informativo</Alert>
      <Alert variant="success">Operacion exitosa</Alert>
      <Alert variant="warning">Advertencia</Alert>
      <Alert variant="error">Error inesperado</Alert>
      <Alert variant="neutral">Mensaje neutral</Alert>
    </div>
  ),
};

/**
 * @description Avatares individuales y en grupo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Avatares: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Avatar initials="SC" variant="primary" />
        <Avatar initials="AB" variant="secondary" />
        <Avatar initials="CD" variant="accent" />
        <Avatar initials="EF" variant="neutral" />
      </div>
      <AvatarGroup
        members={[
          { initials: "SC" },
          { initials: "AB" },
          { initials: "CD" },
          { initials: "EF" },
          { initials: "GH" },
        ]}
        maxVisible={3}
      />
    </div>
  ),
};

/**
 * @description Badges con variantes y tamanos.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Badges: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Activo</Badge>
      <Badge variant="warning">Pendiente</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="neutral" size="sm">
        Small
      </Badge>
      <Badge variant="primary" isOutlined>
        Outlined
      </Badge>
    </div>
  ),
};

/**
 * @description Tarjetas con variantes.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Tarjetas: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Card variant="base" className="w-64">
        Tarjeta base con contenido
      </Card>
      <Card variant="primary" className="w-64">
        Tarjeta primaria
      </Card>
      <Card variant="neutral" className="w-64">
        Tarjeta neutral
      </Card>
    </div>
  ),
};

/**
 * @description Controles de formulario.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Formulario: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <Input placeholder="Nombre" ariaLabel="Nombre" />
      <Textarea rows={3} placeholder="Comentario" ariaLabel="Comentario" />
      <FormField label="Correo" type="email" placeholder="tu@correo.com" />
      <FormField label="Correo" type="email" errorMessage="Correo invalido" />
      <InputGroup label="Precio" prefix="$" type="number" placeholder="0.00" />
      <SearchBar placeholder="Buscar..." ariaLabel="Buscar" />
      <div className="flex items-center gap-4">
        <Checkbox isChecked ariaLabel="Aceptar" />
        <Switch isChecked ariaLabel="Notificaciones" />
      </div>
    </div>
  ),
};

/**
 * @description Indicadores de progreso.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Progreso: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      <Progress value={30} ariaLabel="Carga" />
      <Progress value={60} variant="success" ariaLabel="Carga" />
      <Progress value={90} variant="warning" ariaLabel="Carga" />
    </div>
  ),
};

/**
 * @description Navegacion y jerarquia.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Navegacion: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Ajustes", href: "/settings" },
          { label: "Perfil" },
        ]}
      />
      <Tabs
        items={[
          { id: "general", label: "General" },
          { id: "security", label: "Seguridad" },
        ]}
        activeId="general"
        onChange={fn()}
      />
      <Stepper
        steps={[
          { id: "cart", label: "Carrito" },
          { id: "payment", label: "Pago" },
          { id: "done", label: "Listo" },
        ]}
        currentId="payment"
      />
    </div>
  ),
};

/**
 * @description Estadisticas y listas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Datos: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Stat
          title="Usuarios"
          value="1,204"
          description="Este mes"
          variant="success"
        />
        <Stat
          title="Ventas"
          value="$8,930"
          description="Hoy"
          variant="primary"
        />
      </div>
      <ListItem
        title="Steveen Cues"
        description="Administrador"
        start={<Avatar initials="SC" />}
        end={<Badge variant="success">Activo</Badge>}
      />
      <EmptyState
        title="Sin resultados"
        description="No se encontraron elementos"
      />
    </div>
  ),
};

/**
 * @description Grupos de botones y avisos con accion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Acciones: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup
        items={[
          { id: "day", label: "Dia" },
          { id: "week", label: "Semana" },
          { id: "month", label: "Mes" },
        ]}
        selectedId="week"
        onSelect={fn()}
      />
      <CalloutAction
        message="Tu prueba termina en 3 dias"
        actionLabel="Mejorar plan"
        variant="warning"
        onAction={fn()}
      />
      <Toolbar
        start={<SearchBar placeholder="Buscar..." />}
        end={
          <ButtonGroup
            items={[
              { id: "list", label: "Lista" },
              { id: "grid", label: "Cuadricula" },
            ]}
            selectedId="list"
          />
        }
      />
    </div>
  ),
};

/**
 * @description Encabezados de seccion y separadores.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Secciones: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <SectionHeading
        eyebrow="Panel"
        title="Resumen general"
        subtitle="Metricas principales del periodo actual"
        size="lg"
      />
      <Divider />
      <SectionHeading title="Seccion compacta" size="sm" align="center" />
    </div>
  ),
};
