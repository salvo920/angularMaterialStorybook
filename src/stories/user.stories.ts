import type { Meta, StoryObj } from '@storybook/angular/';
import { UserComponent } from '../app/components/user/user.component';

const meta: Meta<UserComponent> = {
  component: UserComponent,
  //   parameters: {
  //     // actions: { argTypesRegex: '^on.*' },
  //     // handles: ['mouseover', 'click .btn'],
  //   },
  //   decorators: [withActions],
};

export default meta;
type Story = StoryObj<UserComponent>;

export const userTableStory: Story = {
  args: {
    columnsToDisplay: ['position', 'name', 'weight', 'symbol'],
    dataSource: [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    ],
  },
};
