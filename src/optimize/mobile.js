// mobile wrapper 
export const MyWrapperComponent = (props) => {
    const isMobile = useMediaQuery({query: '(max-width: 1000px)'});
    const textStyle = isMobile ? 'text-mobile' : 'text-desktop';

    return (
        <div className={textStyle}>
            {props.children}
        </div>
    )
}