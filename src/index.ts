import { program } from "commander";

program.option("-h, --help", "help");
program.parse();

type Opts = {
  help: boolean;
};

const opts = program.opts<Opts>();

function main() {
  if (opts.help) {
    console.log("help message");
    return;
  }

  console.log("yay");
}

main();
