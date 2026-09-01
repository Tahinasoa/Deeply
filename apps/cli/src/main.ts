#!/usr/bin/env node
import { Command } from "commander";

const program = new Command();

program
  .name("deeply")
  .description("CLI for creating and validating Deeply content")
  .version("0.0.1");

program
  .command("generate")
  .description("Transforms a source document into a JSON exercise")
  .argument("<source>", "path of source document (PDF, text, image)")
  .action(async (source: string) => {
    console.log(`Generation from: ${source}`);
  });

program
  .command("validate")
  .description("Validates the structure of a JSON exercise file")
  .argument("<file>", "path of JSON file")
  .action(async (file: string) => {
    console.log(`Validation of: ${file}`);
  });

program.parse();