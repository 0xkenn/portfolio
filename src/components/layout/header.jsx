"use client";

import React, { useState } from 'react'
import { useScroll } from '../hooks/use-scroll'
import BlurFade from '../magicui/blur-fade';
import { paths } from '@/consts';
import ScrollLink from '../common/scroll-link';
import { ModeToggle } from '../mode-toggle';
import { Button } from '../ui/button';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Mail, Menu } from 'lucide-react';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

const Header = () => {
    const scrolled = useScroll(50);
    const [sheetOpen, setSheetOpen] = useState(false);

    const handleSheetClose = () => {
      setSheetOpen((prev) => !prev);
    };


  return (
    <header className={`fixed top-0 flex w-screen justify-center ${
        scrolled
          ? "border border-b-[#0c0a091a] bg-background/30 shadow-md backdrop-blur-sm dark:border-b-[#fafaf91a]"
          : "bg-transparent"
      } z-30 transition-all ease-in`}> 
      <BlurFade className="w-full">
      <nav className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between px-4 py-2.5 lg:px-6">
        <p className='font-mono'>Kenny</p>
        <div className="hidden w-full items-center justify-between gap-8 lg:flex lg:w-auto">
        <ul className="inline-flex space-x-8">
        {paths.map(({ name }, index) => (
                <ScrollLink
                  id={name.toLowerCase()}
                 
                  key={index}
                  className="text-muted-foreground transition-colors ease-in hover:text-primary"
                >
                  {name}
                </ScrollLink>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <ModeToggle />
              <Button asChild>
                <Link href={siteConfig.links.resume} target="_blank">
                  Resume
                </Link>
              </Button>
            </div>
        </div>

        <div className="inline-flex items-center gap-2 lg:hidden">
          <ModeToggle/>
              <Sheet open={sheetOpen} onOpenChange={setSheetOpen}> 
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="shrink-0">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col" side="right">
                <SheetHeader>
                  <VisuallyHidden.Root>
                    <SheetTitle>Main Menu</SheetTitle>
                    <SheetDescription>Toggle main menu</SheetDescription>
                  </VisuallyHidden.Root>
                </SheetHeader>
                <nav className="grid gap-8 font-medium text-lg">
                  Kenny  {/*logo*/}  
                  
                  {paths.map(({ name }, index) => (
                    <ScrollLink
                      id={name.toLowerCase()}
                      key={index}
                      className="text-muted-foreground transition-colors ease-in hover:text-primary"
                      onHandleSheetClose={handleSheetClose}
                    >
                      {name}
                    </ScrollLink>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-8">
                  <Button asChild>
                    <Link
                      href={siteConfig.links.resume}
                      target="_blank"
                      onClick={() => setSheetOpen(false)}
                    >
                      Resume
                    </Link>
                  </Button>
                  <div className="flex items-center justify-around">
                    <Link
                      href={siteConfig.links.github}
                      target="_blank"
                      onClick={() => setSheetOpen(false)}
                    >
                      <GitHubLogoIcon className="h-6 w-6 text-muted-foreground transition-colors ease-in hover:text-foreground" />
                    </Link>
                    <Link
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      onClick={() => setSheetOpen(false)}
                    >
                      <LinkedInLogoIcon className="h-6 w-6 text-muted-foreground transition-colors ease-in hover:text-foreground" />
                    </Link>
                    <Link
                      href={`mailto:${siteConfig.links.email}`}
                      onClick={() => setSheetOpen(false)}
                    >
                      <Mail className="h-6 w-6 text-muted-foreground transition-colors ease-in hover:text-foreground" />
                    </Link>
                  </div>
                </div>
                </SheetContent>
              </Sheet>
        </div>
        </nav>
      </BlurFade>

    </header>
  )
}

export default Header