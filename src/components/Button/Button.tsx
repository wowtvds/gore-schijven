import ButtonRoot from "./Button.root";
import { ButtonProps } from "./Button.types";

export default function Button({
    children = null,
    ...props
}: ButtonProps) {
    return (
		<ButtonRoot {...props}>
            <span className="group flex items-center justify-center text-neutral-500 hover:text-purple-500 shadow-xl h-14 px-6 rounded-full border-x border-neutral-600 hover:border-purple-500 bg-neutral-900 transition duration-300 hover:scale-x-110">
                <span className="flex gap-x-2 items-center transition-transform duration-300 group-hover:scale-x-90">
                    { children }

                    {props.isLoading && (
                        <svg className="animate-spin w-4 h-4 text-neutral-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    )}
                </span>
            </span>
        </ButtonRoot>
    );
};
