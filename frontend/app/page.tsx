import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <>
      <main className="grid grid-rows-3 gap-16 justify-items-center items-center">
        <h3>SIMPLIFY YOUR LINKS</h3>
        <h2>Transform Long Urls Into Tiny Links Instantly!</h2>
         <Input
          label="Website"
          labelPlacement="outside"
          placeholder="heroui.com"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">https://</span>
            </div>
          }
          type="url"
        />

        <Button size="md">Generate Link - <code>its free</code></Button>
      </main>
    </>
  );
}
