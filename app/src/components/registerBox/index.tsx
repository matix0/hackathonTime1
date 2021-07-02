import './style.css'

export interface RegisterBoxProps {
   children: React.ReactNode
}

export const RegisterBox: React.FC<RegisterBoxProps> = ({ children }) => {
    return(
    <div id="content-global">{children}</div>
 )
}