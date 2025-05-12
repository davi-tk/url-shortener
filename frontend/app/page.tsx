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
    <div className="grid grid-cols-6 h-min">
        <main className="col-start-3 col-span-2 grid grid-rows-4 gap-8 justify-items-center items-center text-center">
          <h3 className="text-3xl">SIMPLIFY YOUR LINKS</h3>
          <h2 className="text-5xl">Transform Long Urls Into Tiny Links Instantly!</h2>

            <form className="w-full grid grid-rows-2 gap-2 row-span-2">
              <Input
              className="w-full"
              label="Website"
              labelPlacement="outside"
              placeholder="heroui.com"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">https://</span>
                </div>
              }
              type="url"
              radius="none"
            />
            <Button className="w-full" size="md" radius="none">Generate Link - <code className="italic">its free</code></Button>
          
            </form>
            
        </main>
      </div>
    </>
  );
}
