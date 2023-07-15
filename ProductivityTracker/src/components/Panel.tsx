import { FC, HTMLAttributes } from "react";
import classNames from "classnames";

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
className?: string;
}

const Panel: FC<PanelProps> = ({ children, className, ...rest }) => {
const finalClassNames = classNames(
"border",
"rounded-md",
"px-3",
"shadow",
"bg-white",
"py-2",
"w-fit",
"z-20",
className
);

return (
<div {...rest} className={finalClassNames}>
{children}
</div>
);
};

export default Panel;