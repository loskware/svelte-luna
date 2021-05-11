<script>
import { classNames } from "../utils";


  /** @type {"plain"|"accent"|"danger"|"warning"|"success"} color theme */
  export let theme = "accent";
  

  $: cn = classNames("CheckBox")
  /* export const CheckBox = (props) => {
  const { className, variant = "accent", ...other } = props;
  const cn = classNames("CheckBox", `CheckBox-${variant}`, className);
  return (
    
  );
}; */
</script>


<label className={cn}>
  <input className="CheckBox-input" type="checkbox" {...other} />
  <span className="CheckBox-mark"></span>
</label>


<style lang="scss">
  .CheckBox {
  position: relative;
  display: inline-flex;
  align-items: center;
  &:hover > .CheckBox-mark {
    border-color: currentColor;
  }

  // VARIANTS
  &-accent {
    color: var(--luna-accent-color);
  }
  &-danger {
    color: var(--luna-danger-color);
  }
  &-warning {
    color: var(--luna-warning-color);
  }
  &-success {
    color: var(--luna-success-color);
  }
}

.CheckBox-input {
  position: absolute;
  left: 0;
  top: 0;
  height: 18px;
  width: 18px;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
  &:checked + .CheckBox-mark {
    border-color: currentColor;
    &::after {
      transform: scale(1);
    }
  }
  &:disabled {
    cursor: default;
    + .CheckBox-mark {
      border-color: var(--luna-disabled-border-color);
      color: var(--luna-disabled-color);
    }
  }
}

.CheckBox-mark {
  display: block;
  box-sizing: content-box;
  height: 16px;
  width: 16px;
  border: 1px solid var(--luna-border-color);
  border-radius: var(--luna-border-radius-m);
  transition: border-color ease-in-out var(--luna-duration-fast);
  will-change: border-color;
  &::after {
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 4px;
    right: 4px;
    content: "";
    background-color: currentColor;
    border-radius: var(--luna-border-radius-s);
    transform: scale(0);
    transition: transform ease-out
      var(--luna-duration-fast);
    will-change: transform;
  }
}

</style>