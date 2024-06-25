import * as React from "react"
import * as Icon from "lucide-react"

interface RenderIconProps {
  icon: keyof typeof Icon
}

const RenderIcon: React.FC<RenderIconProps> = ({ icon }) => {
  const IconComponent =
    (Icon[icon] as React.ElementType) || (Icon["CircleHelp"] as React.ElementType)
  return <IconComponent />
}

export default RenderIcon
