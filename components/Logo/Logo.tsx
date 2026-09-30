import classes from "./logo.module.css";

type Props = {
    className?: string;
    // Монетка крутится при наведении на ближайший .logo-родитель
    spin?: boolean;
};

// Логотип CRYPTOMAN: буква «O» заменена на монету из public/logo-coin.svg
export default function Logo({ className = "", spin = false }: Props) {
    return (
        <span className={`${classes.logo} ${spin ? classes.spin : ""} ${className}`} aria-label="CRYPTOMAN">
            <span aria-hidden="true">CRYPT</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={classes.coin} src="/logo-coin.svg" alt="" aria-hidden="true" />
            <span aria-hidden="true">MAN</span>
        </span>
    );
}
