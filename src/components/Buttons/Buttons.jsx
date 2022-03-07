import {PrimaryButton, IconButton, LinkButton} from './Styles';

// Button
export const Button = function({children, handleClick, className, secundary, type}) {
    return (
        <PrimaryButton onClick={handleClick} className={className} secundary={secundary} type={type}>
            {children}
        </PrimaryButton>
    );
}

// Button Icon
export const ButtonIcon = function({children, handleClick, className, type}) {
    return (
        <IconButton onClick={handleClick} className={className} type={type}>
            {children}
        </IconButton>
    );
}

// Button Icon
export const ButtonLink = function({children, to, secundary, className}) {
    return (
        <LinkButton to={to || '/'} secundary={secundary} className={className}>
            {children}
        </LinkButton>
    );
}