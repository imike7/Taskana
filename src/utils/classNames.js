export const classNames = (...args) => {
  const classes = [];

  args.forEach(arg => {
    if (!arg) return;

    if (typeof arg === 'string') {
      classes.push(arg);
    } else if (typeof arg === 'object') {
      if (Array.isArray(arg)) {
        classes.push(classNames(...arg));
      } else {
        for (const key in arg) {
          if (arg[key]) {
            classes.push(key);
          }
        }
      }
    }
  });

  return classes.filter(Boolean).join(' ');
};