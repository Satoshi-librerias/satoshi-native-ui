import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {
  Alert,
  Avatar,
  Badge,
  Card,
  Checkbox,
  Divider,
  Icon,
  Input,
  Kbd,
  Progress,
  Radio,
  Skeleton,
  Spinner,
  Switch,
  Textarea,
  Tooltip,
} from "@components";

/**
 * @description Stories del atomo Alert.
 * @author Steveen Cues
 * @version 1.0.0
 */
const alertMeta = {
  title: "Atomos/Alert",
  component: Alert,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default alertMeta;

type AlertStory = StoryObj<typeof alertMeta>;

/**
 * @description Alertas con todas las variantes semanticas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const AlertVariantes: AlertStory = {
  args: {
    children: null,
  },
  render: () => (
    <div className="flex w-96 flex-col gap-3">
      <Alert variant="info">Mensaje informativo</Alert>
      <Alert variant="success">Operacion exitosa</Alert>
      <Alert variant="warning">Advertencia</Alert>
      <Alert variant="error">Error inesperado</Alert>
      <Alert variant="neutral">Mensaje neutral</Alert>
    </div>
  ),
};

/**
 * @description Stories del atomo Avatar.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const AvatarStories: StoryObj<Meta<typeof Avatar>> = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar initials="SC" variant="primary" />
      <Avatar initials="AB" variant="secondary" />
      <Avatar initials="CD" variant="accent" />
      <Avatar initials="EF" variant="neutral" />
      <Avatar
        alt="Satoshi"
        src="https://placehold.co/96x96/570df8/ffffff/png?text=S"
      />
    </div>
  ),
};

/**
 * @description Stories del atomo Badge.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const BadgeStories: StoryObj<Meta<typeof Badge>> = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="success">Activo</Badge>
      <Badge variant="warning">Pendiente</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="neutral" size="sm">
        Small
      </Badge>
      <Badge isOutlined variant="primary">
        Outlined
      </Badge>
    </div>
  ),
};

/**
 * @description Stories del atomo Card.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CardStories: StoryObj<Meta<typeof Card>> = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Card className="w-64" variant="base">
        Tarjeta base con contenido
      </Card>
      <Card className="w-64" variant="primary">
        Tarjeta primaria
      </Card>
      <Card className="w-64" variant="secondary">
        Tarjeta secundaria
      </Card>
      <Card className="w-64" variant="accent">
        Tarjeta acento
      </Card>
      <Card className="w-64" variant="neutral">
        Tarjeta neutral
      </Card>
    </div>
  ),
};

/**
 * @description Stories del atomo Checkbox.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CheckboxStories: StoryObj<Meta<typeof Checkbox>> = {
  render: () => (
    <div className="flex items-center gap-4">
      <Checkbox ariaLabel="Sin marcar" isChecked={false} />
      <Checkbox ariaLabel="Marcado" isChecked={true} />
      <Checkbox ariaLabel="Secundario" isChecked={true} variant="secondary" />
      <Checkbox ariaLabel="Acento" isChecked={true} variant="accent" />
      <Checkbox ariaLabel="Deshabilitado" disabled={true} isChecked={true} />
    </div>
  ),
};

/**
 * @description Stories del atomo Divider.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const DividerStories: StoryObj<Meta<typeof Divider>> = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <Divider />
      <Divider variant="primary" />
      <Divider variant="accent" />
      <div className="flex h-16 items-center gap-4">
        <Divider orientation="vertical" />
        <span>Vertical</span>
        <Divider orientation="vertical" variant="primary" />
      </div>
    </div>
  ),
};

/**
 * @description Stories del atomo Icon.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const IconStories: StoryObj<Meta<typeof Icon>> = {
  render: () => (
    <div className="flex items-center gap-3">
      <Icon name="menu" size={24} title="Menu" />
      <Icon name="search" size={24} title="Buscar" />
      <Icon name="settings" size={32} title="Ajustes" />
    </div>
  ),
};

/**
 * @description Stories del atomo Input.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const InputStories: StoryObj<Meta<typeof Input>> = {
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      <Input ariaLabel="Nombre" placeholder="Nombre" variant="primary" />
      <Input ariaLabel="Correo" placeholder="Correo" variant="secondary" />
      <Input ariaLabel="Busqueda" placeholder="Buscar..." variant="ghost" />
      <Input
        ariaLabel="Deshabilitado"
        disabled={true}
        placeholder="Bloqueado"
      />
    </div>
  ),
};

/**
 * @description Stories del atomo Kbd.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const KbdStories: StoryObj<Meta<typeof Kbd>> = {
  render: () => (
    <div className="flex items-center gap-2">
      <Kbd size="sm">Ctrl</Kbd>
      <Kbd variant="primary">Shift</Kbd>
      <Kbd variant="accent">Alt</Kbd>
      <Kbd size="lg">Enter</Kbd>
    </div>
  ),
};

/**
 * @description Stories del atomo Progress.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ProgressStories: StoryObj<Meta<typeof Progress>> = {
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      <Progress ariaLabel="Carga" value={30} />
      <Progress ariaLabel="Carga" value={60} variant="success" />
      <Progress ariaLabel="Carga" value={90} variant="warning" />
      <Progress ariaLabel="Carga" value={45} variant="error" />
      <Progress ariaLabel="Indeterminado" />
    </div>
  ),
};

/**
 * @description Stories del atomo Radio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const RadioStories: StoryObj<Meta<typeof Radio>> = {
  render: () => (
    <div className="flex items-center gap-4">
      <Radio ariaLabel="Opcion uno" isChecked={true} name="plan" value="one" />
      <Radio ariaLabel="Opcion dos" isChecked={false} name="plan" value="two" />
      <Radio
        ariaLabel="Secundario"
        isChecked={true}
        name="plan2"
        variant="secondary"
        value="three"
      />
      <Radio
        ariaLabel="Deshabilitado"
        disabled={true}
        isChecked={true}
        name="plan3"
        value="four"
      />
    </div>
  ),
};

/**
 * @description Stories del atomo Skeleton.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SkeletonStories: StoryObj<Meta<typeof Skeleton>> = {
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      <Skeleton className="h-32 w-full" variant="rectangle" />
      <div className="flex items-center gap-3">
        <Skeleton className="h-12 w-12" variant="circle" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-4 w-full" variant="text" />
          <Skeleton className="h-4 w-2/3" variant="text" />
        </div>
      </div>
    </div>
  ),
};

/**
 * @description Stories del atomo Spinner.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SpinnerStories: StoryObj<Meta<typeof Spinner>> = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner ariaLabel="Cargando" size="sm" />
      <Spinner ariaLabel="Cargando" size="md" />
      <Spinner ariaLabel="Cargando" size="lg" />
      <Spinner ariaLabel="Cargando" size="lg" variant="accent" />
    </div>
  ),
};

/**
 * @description Stories del atomo Switch.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SwitchStories: StoryObj<Meta<typeof Switch>> = {
  render: () => (
    <div className="flex items-center gap-4">
      <Switch ariaLabel="Apagado" isChecked={false} />
      <Switch ariaLabel="Encendido" isChecked={true} />
      <Switch ariaLabel="Secundario" isChecked={true} variant="secondary" />
      <Switch ariaLabel="Acento" isChecked={true} variant="accent" />
      <Switch ariaLabel="Deshabilitado" disabled={true} isChecked={true} />
    </div>
  ),
};

/**
 * @description Stories del atomo Textarea.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TextareaStories: StoryObj<Meta<typeof Textarea>> = {
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      <Textarea
        ariaLabel="Comentario"
        placeholder="Escribe un comentario..."
        rows={3}
      />
      <Textarea
        ariaLabel="Descripcion"
        placeholder="Descripcion..."
        rows={3}
        variant="ghost"
      />
      <Textarea
        ariaLabel="Deshabilitado"
        disabled={true}
        placeholder="Bloqueado"
        rows={2}
      />
    </div>
  ),
};

/**
 * @description Stories del atomo Tooltip.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TooltipStories: StoryObj<Meta<typeof Tooltip>> = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Tooltip message="Guardar cambios">
        <button type="button">Hover</button>
      </Tooltip>
      <Tooltip message="Accion primaria" variant="primary">
        <button type="button">Primario</button>
      </Tooltip>
      <Tooltip message="Accion de acento" variant="accent">
        <button type="button">Acento</button>
      </Tooltip>
    </div>
  ),
};

/**
 * @description Callback de ejemplo para stories interactivas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const onAction = fn();
