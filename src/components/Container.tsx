import { IChildren } from '../types/components';

export default function Container({ children }: IChildren) {
    return (
        <div>
            {children}
        </div>
    );
}
