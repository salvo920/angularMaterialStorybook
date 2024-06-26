import type { Meta, StoryObj } from '@storybook/angular/';
import { withActions } from '@storybook/addon-actions/decorator';
import { ButtonComponent } from './button.component';
import { action } from '@storybook/addon-actions';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
//   parameters: {
//     // actions: { argTypesRegex: '^on.*' },
//     // handles: ['mouseover', 'click .btn'],
//   },
//   decorators: [withActions],
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'button',
    backgroundColor: '#e00000',
    size: 'medium',
    // 👇 Create an action that appears when the onClick event is fired
    onClick: action('on-click'),
  },
};
