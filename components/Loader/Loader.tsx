import classes from "./loader.module.css";

export default function Loader() {
  return (
      <span className={`${classes.dots} ${classes.dots_3}`}>
        <span className={`${classes.line} ${classes.line_2}`}>.</span>
        <span className={`${classes.line} ${classes.line_3}`}>.</span>
        <span className={`${classes.line} ${classes.line_4}`}>.</span>
      </span>
  );
}
