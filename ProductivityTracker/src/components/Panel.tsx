import { FC, HTMLAttributes } from "react";
import classNames from "classnames";

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
className?: string;
}

const Panel: FC<PanelProps> = ({ children, className, ...rest }) => {
const finalClassNames = classNames(
"border",
"rounded-md",
"px-2.5",
"shadow",
"bg-white",
"py-2",
"w-fit",
"z-50",
className
);

return (
<div id="panel" {...rest} className={finalClassNames}>
{children}
</div>
);
};

export default Panel;