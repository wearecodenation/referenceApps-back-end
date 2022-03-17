exports.mockData = [
  {
    title: "nec tempus mauris erat",
    actor: "Eric Glover",
  },
  {
    title: "molestie orci tincidunt adipiscing.",
    actor: "Germane Richmond",
  },
  {
    title: "nisi. Aenean eget metus.",
    actor: "Raphael Fox",
  },
  {
    title: "a, auctor non, feugiat",
    actor: "Kuame Wilkins",
  },
  {
    title: "Donec porttitor tellus non",
    actor: "Keaton Bryan",
  },
];

exports.mockYargs = (cmd, obj) => {
  const argv = { _: [], [cmd]: true };
  for (const key in obj) {
    argv[key] = obj[key];
  }
  return argv;
};
