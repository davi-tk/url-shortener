"use client"
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form"
import { FormEvent, useState } from "react";


export default function Home() {
  const [url, setUrl] = useState<string>("")

  const onSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(url)
  }

  return (
    <>
    <div className="grid grid-cols-6 h-min">
        <main className="col-start-3 col-span-2 grid grid-rows-4 gap-8 justify-items-center items-center text-center">
          <h3 className="text-3xl">SIMPLIFY YOUR LINKS</h3>
          <h2 className="text-5xl">Transform Long Urls Into Tiny Links Instantly!</h2>

            <Form
              className="w-full grid grid-rows-2 gap-2 row-span-2"
              onSubmit={onSubmit}>
              <Input
              className="w-full"
              label="Url"
              labelPlacement="outside"
              placeholder="your-url.com"
              type="url"
              radius="none"
              value={url}
              onValueChange={setUrl}
              />
              <Button 
                className="w-full" 
                size="md" 
                radius="none"
                type="submit">Generate Link - <span className="italic">its free</span></Button>
          
            </Form>
        </main>
      </div>
    </>
  );
}
