import { MyButton } from "./MyButton";

const meta = {
    title: 'MyComponent/MyButton',
    component: MyButton,
    argTypes: {
        backgroundColor: { control: 'color'}
    }
}

export default meta;

export const Primary = {
    args: {
        children: 'Button',
        color: '#000',
        backgroundColor: '#fff'
    }
}