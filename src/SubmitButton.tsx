import { Button } from "@radix-ui/themes";

export const SubmitButton = ({ ...rest }) => (
  <Button {...rest} className="w-36 h-12 relative">
    <div className="w-36 h-12 left-0 top-0 absolute bg-gradient-to-b from-stone-50 to-cyan-400 rounded-xl shadow border-b-2 border-neutral-500" />
    <div className="left-[38px] top-[11px] absolute text-black text-xl font-normal font-['Inter']">Button</div>
  </Button>
);