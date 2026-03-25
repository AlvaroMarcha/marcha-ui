/*
 * Public API Surface of @marchaui/marcha-ui
 */

// Primitivos
export { MIcon } from './lib/m-icon/m-icon';
export { MRipple } from './lib/m-ripple/m-ripple.directive';

export { MButton } from './lib/m-button/m-button';
export type { MButtonSeverity, MButtonVariant, MButtonSize } from './lib/m-button/m-button';

export { MCard } from './lib/m-card/m-card';
export type { MCardVariant } from './lib/m-card/m-card';

export { MAvatar } from './lib/m-avatar/m-avatar';
export type { MAvatarSize, MAvatarShape } from './lib/m-avatar/m-avatar';

export { MBadge } from './lib/m-badge/m-badge';
export type { MBadgeSeverity, MBadgeSize } from './lib/m-badge/m-badge';

export { MDivider } from './lib/m-divider/m-divider';

export { MOverlayBadge } from './lib/m-overlay-badge/m-overlay-badge';

// Formularios
export { MInput } from './lib/m-input/m-input';
export type { MInputType } from './lib/m-input/m-input';

export { MPassword } from './lib/m-password/m-password';

export { MTextarea } from './lib/m-textarea/m-textarea';

export { MCheckbox } from './lib/m-checkbox/m-checkbox';

export { MNumberInput } from './lib/m-number-input/m-number-input';

export { MFloatLabel } from './lib/m-float-label/m-float-label';

export { MSelect } from './lib/m-select/m-select';
export type { MSelectOption } from './lib/m-select/m-select';

export { MRadioGroup } from './lib/m-radio-group/m-radio-group';
export type { MRadioOption } from './lib/m-radio-group/m-radio-group';

export { MRangeSlider } from './lib/m-range-slider/m-range-slider';

// Overlays y notificaciones
export { MMessage } from './lib/m-message/m-message';
export type { MMessageSeverity } from './lib/m-message/m-message';

export { MToast } from './lib/m-toast/m-toast';
export { MNotificationService } from './lib/m-toast/m-notification.service';
export type { MToastItem, MToastSeverity } from './lib/m-toast/m-notification.service';

export { MDialog } from './lib/m-dialog/m-dialog';
export type { MDialogSize } from './lib/m-dialog/m-dialog';

export { MDrawer } from './lib/m-drawer/m-drawer';
export type { MDrawerPosition } from './lib/m-drawer/m-drawer';

// Layout y navegacion
export { MTabs, MTabPanel } from './lib/m-tabs/m-tabs';
export type { MTabItem, MTabsVariant } from './lib/m-tabs/m-tabs';

export { MAccordion } from './lib/m-accordion/m-accordion';
export type { MAccordionItem } from './lib/m-accordion/m-accordion';

export { MChip } from './lib/m-chip/m-chip';
export type { MChipSeverity, MChipSize } from './lib/m-chip/m-chip';

export { MTooltip } from './lib/m-tooltip/m-tooltip';
export type { MTooltipPosition } from './lib/m-tooltip/m-tooltip';

// Inputs avanzados
export { MCalendar } from './lib/m-calendar/m-calendar';
export type { MCalendarMode, MDateRange } from './lib/m-calendar/m-calendar';

export { MTable } from './lib/m-table/m-table';
export type { MTableColumn, MTableVariant, MTableRow, MTableAction, MTableToggleChange } from './lib/m-table/m-table';

export { MColorPicker } from './lib/m-color-picker/m-color-picker';

// Navegacion
export { MToggleButton } from './lib/m-toggle-button/m-toggle-button';
export type { MToggleButtonSize, MToggleButtonSeverity } from './lib/m-toggle-button/m-toggle-button';
export { MMenubar } from './lib/m-menubar/m-menubar';
export type { MMenubarItem, MMenubarSubItem } from './lib/m-menubar/m-menubar';

// Utilidades
export { MToggleSwitch } from './lib/m-toggle-switch/m-toggle-switch';
export type { MToggleSize } from './lib/m-toggle-switch/m-toggle-switch';
export { MCopy } from './lib/m-copy/m-copy';
export { MSortable } from './lib/m-sortable/m-sortable';
export type { MSortableItem } from './lib/m-sortable/m-sortable';

// Visualización de datos
export { MDataview } from './lib/m-dataview/m-dataview';
export type { MDataviewLayout, MDataviewSortOption } from './lib/m-dataview/m-dataview';

// Contenedores de información
export { MPanel } from './lib/m-panel/m-panel';
export type { MPanelSeverity } from './lib/m-panel/m-panel';

export { MToolbar } from './lib/m-toolbar/m-toolbar';
export type { MToolbarPosition, MToolbarVariant, MToolbarItem } from './lib/m-toolbar/m-toolbar';

// Uploads
export { MFileUpload } from './lib/m-file-upload/m-file-upload';
export type { MFileUploadValidationError } from './lib/m-file-upload/m-file-upload';

// Rating
export { MRating } from './lib/m-rating/m-rating';
export type { MRatingSize } from './lib/m-rating/m-rating';

// Composer
export { MComposer } from './lib/m-composer/m-composer';
export type { MComposerMode, MComposerSubmit } from './lib/m-composer/m-composer';

// Menú contextual
export { MContextMenu } from './lib/m-context-menu/m-context-menu';
export { MContextMenuDirective } from './lib/m-context-menu/m-context-menu.directive';
export { MContextMenuService } from './lib/m-context-menu/m-context-menu.service';
export type { MContextMenuItem, MContextMenuVariant, MContextMenuTrigger, MContextMenuPlacement, MContextMenuSeverity } from './lib/m-context-menu/m-context-menu';

