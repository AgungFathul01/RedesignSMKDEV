import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Code,
  ExternalLink,
  Lightbulb,
  Menu,
  Search,
  Star,
  Users,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const logos = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',
    alt: 'Google logo',
    width: 128,
    height: 48,
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png',
    alt: 'Microsoft logo',
    width: 128,
    height: 48,
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png',
    alt: 'Apple logo',
    width: 48,
    height: 48,
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png',
    alt: 'IBM logo',
    width: 128,
    height: 48,
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png',
    alt: 'Amazon logo',
    width: 128,
    height: 48,
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
    alt: 'Netflix logo',
    width: 128,
    height: 48,
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 mx-4 mt-4 rounded-full border bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">
                <span className="text-primary">SMK</span>
                <span className="text-amber-500">.DEV</span>
              </span>
            </Link>
            <nav className="hidden lg:flex gap-6">
              {/* For Companies Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-primary">
                  <span className="flex items-center">
                    For Companies <ChevronDown className="ml-1 h-4 w-4" />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 p-2 rounded-xl border border-gray-100 shadow-lg bg-white/95 backdrop-blur-sm">
                  <div className="p-2 mb-2 bg-primary/5 rounded-lg">
                    <DropdownMenuLabel className="text-primary font-bold">Tools</DropdownMenuLabel>
                    <DropdownMenuItem className="rounded-md mt-1 hover:bg-primary/10 focus:bg-primary/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Code className="h-4 w-4 text-primary" />
                        </div>
                        <span>SRS Generator</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-md mt-1 hover:bg-primary/10 focus:bg-primary/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Lightbulb className="h-4 w-4 text-primary" />
                        </div>
                        <span>Jobdesk Template</span>
                      </div>
                    </DropdownMenuItem>
                  </div>

                  <div className="p-2 mb-2 bg-amber-500/5 rounded-lg">
                    <DropdownMenuLabel className="text-amber-600 font-bold">Find Talent</DropdownMenuLabel>
                    <DropdownMenuItem className="rounded-md mt-1 hover:bg-amber-500/10 focus:bg-amber-500/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                          <Users className="h-4 w-4 text-amber-600" />
                        </div>
                        <span>Directory Talent</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-md mt-1 hover:bg-amber-500/10 focus:bg-amber-500/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-amber-600" />
                        </div>
                        <span>Contract</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-md mt-1 hover:bg-amber-500/10 focus:bg-amber-500/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                          <Zap className="h-4 w-4 text-amber-600" />
                        </div>
                        <span>Head Hunting</span>
                      </div>
                    </DropdownMenuItem>
                  </div>

                  <DropdownMenuItem className="rounded-md hover:bg-gray-100 focus:bg-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <Search className="h-4 w-4 text-gray-600" />
                      </div>
                      <span>FAQ</span>
                    </div>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator className="my-2" />
                  <DropdownMenuLabel className="text-gray-600 font-bold">Case Study</DropdownMenuLabel>
                  <DropdownMenuItem className="rounded-md hover:bg-gray-100 focus:bg-gray-100">
                    Volantis Case Study
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-md hover:bg-gray-100 focus:bg-gray-100">
                    GITS Case Study
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-md hover:bg-gray-100 focus:bg-gray-100">
                    Other Case Studies
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* For Talent Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-primary">
                  <span className="flex items-center">
                    For Talent <ChevronDown className="ml-1 h-4 w-4" />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 p-2 rounded-xl border border-gray-100 shadow-lg bg-white/95 backdrop-blur-sm">
                  <DropdownMenuItem className="rounded-md hover:bg-primary/10 focus:bg-primary/10">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <span>Register as Talent</span>
                    </div>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator className="my-2" />
                  <div className="p-2 mb-2 bg-primary/5 rounded-lg">
                    <DropdownMenuLabel className="text-primary font-bold">Tools</DropdownMenuLabel>
                    <DropdownMenuItem className="rounded-md mt-1 hover:bg-primary/10 focus:bg-primary/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <span>CV Checker Tools</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-md mt-1 hover:bg-primary/10 focus:bg-primary/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Code className="h-4 w-4 text-primary" />
                        </div>
                        <span>Open Assessment Tools</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-md mt-1 hover:bg-primary/10 focus:bg-primary/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Lightbulb className="h-4 w-4 text-primary" />
                        </div>
                        <span>Other Tools</span>
                      </div>
                    </DropdownMenuItem>
                  </div>

                  <div className="p-2 mb-2 bg-amber-500/5 rounded-lg">
                    <DropdownMenuLabel className="text-amber-600 font-bold">Resources</DropdownMenuLabel>
                    <DropdownMenuItem className="rounded-md mt-1 hover:bg-amber-500/10 focus:bg-amber-500/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                          <Code className="h-4 w-4 text-amber-600" />
                        </div>
                        <span>Code Labs</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-md mt-1 hover:bg-amber-500/10 focus:bg-amber-500/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                          <Lightbulb className="h-4 w-4 text-amber-600" />
                        </div>
                        <span>Tutorials</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-md mt-1 hover:bg-amber-500/10 focus:bg-amber-500/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-amber-600" />
                        </div>
                        <span>LMS</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-md mt-1 hover:bg-amber-500/10 focus:bg-amber-500/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                          <Star className="h-4 w-4 text-amber-600" />
                        </div>
                        <span>Certification</span>
                      </div>
                    </DropdownMenuItem>
                  </div>

                  <div className="p-2 bg-gray-50 rounded-lg">
                    <DropdownMenuLabel className="text-gray-600 font-bold">Find a Job</DropdownMenuLabel>
                    <DropdownMenuItem className="rounded-md mt-1 hover:bg-gray-100 focus:bg-gray-100">
                      Jobs
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-md mt-1 hover:bg-gray-100 focus:bg-gray-100">
                      Internships
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-primary">
                  <span className="flex items-center">
                    Services <ChevronDown className="ml-1 h-4 w-4" />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 p-2 rounded-xl border border-gray-100 shadow-lg bg-white/95 backdrop-blur-sm">
                  <DropdownMenuItem className="rounded-md hover:bg-primary/10 focus:bg-primary/10">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <span>Hire Staff IT</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-md hover:bg-primary/10 focus:bg-primary/10">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Code className="h-4 w-4 text-primary" />
                      </div>
                      <span>Hire IT Network</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-md hover:bg-primary/10 focus:bg-primary/10">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Lightbulb className="h-4 w-4 text-primary" />
                      </div>
                      <span>Other Services</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                Events
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-primary">
                  <span className="flex items-center">
                    More <ChevronDown className="ml-1 h-4 w-4" />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 p-2 rounded-xl border border-gray-100 shadow-lg bg-white/95 backdrop-blur-sm">
                  <DropdownMenuItem className="rounded-md hover:bg-gray-100 focus:bg-gray-100">
                    About Us
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-md hover:bg-gray-100 focus:bg-gray-100">Blog</DropdownMenuItem>
                  <DropdownMenuItem className="rounded-md hover:bg-gray-100 focus:bg-gray-100">
                    Contact
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hidden lg:block transition-colors hover:text-primary">
              Login
            </Link>
            <Button className="rounded-full shadow-md transition-transform hover:scale-105 text-white">
  Hire Talent Now
</Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b pb-4">
                    <Link href="/" className="flex items-center space-x-2">
                      <span className="font-bold text-xl">
                        <span className="text-primary">SMK</span>
                        <span className="text-amber-500">.DEV</span>
                      </span>
                    </Link>
                  </div>

                  <nav className="flex-1 overflow-auto py-8">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="for-companies">
                        <AccordionTrigger className="py-3 text-base font-medium">For Companies</AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-4 flex flex-col space-y-4">
                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold text-gray-500">Tools</h4>
                              <Link href="#" className="block py-1 text-sm">
                                SRS Generator
                              </Link>
                              <Link href="#" className="block py-1 text-sm">
                                Jobdesk Template
                              </Link>
                            </div>

                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold text-gray-500">Find Talent</h4>
                              <Link href="#" className="block py-1 text-sm">
                                Directory Talent
                              </Link>
                              <Link href="#" className="block py-1 text-sm">
                                Contract
                              </Link>
                              <Link href="#" className="block py-1 text-sm">
                                Head Hunting
                              </Link>
                            </div>

                            <Link href="#" className="block py-1 text-sm">
                              FAQ
                            </Link>

                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold text-gray-500">Case Study</h4>
                              <Link href="#" className="block py-1 text-sm">
                                Volantis Case Study
                              </Link>
                              <Link href="#" className="block py-1 text-sm">
                                GITS Case Study
                              </Link>
                              <Link href="#" className="block py-1 text-sm">
                                Other Case Studies
                              </Link>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="for-talent">
                        <AccordionTrigger className="py-3 text-base font-medium">For Talent</AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-4 flex flex-col space-y-4">
                            <Link href="#" className="block py-1 text-sm">
                              Register as Talent
                            </Link>

                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold text-gray-500">Tools</h4>
                              <Link href="#" className="block py-1 text-sm">
                                CV Checker Tools
                              </Link>
                              <Link href="#" className="block py-1 text-sm">
                                Open Assessment Tools
                              </Link>
                              <Link href="#" className="block py-1 text-sm">
                                Other Tools
                              </Link>
                            </div>

                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold text-gray-500">Resources</h4>
                              <Link href="#" className="block py-1 text-sm">
                                Code Labs
                              </Link>
                              <Link href="#" className="block py-1 text-sm">
                                Tutorials
                              </Link>
                              <Link href="#" className="block py-1 text-sm">
                                LMS
                              </Link>
                              <Link href="#" className="block py-1 text-sm">
                                Certification
                              </Link>
                            </div>

                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold text-gray-500">Find a Job</h4>
                              <Link href="#" className="block py-1 text-sm">
                                Jobs
                              </Link>
                              <Link href="#" className="block py-1 text-sm">
                                Internships
                              </Link>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="services">
                        <AccordionTrigger className="py-3 text-base font-medium">Services</AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-4 flex flex-col space-y-2">
                            <Link href="#" className="block py-1 text-sm">
                              Hire Staff IT
                            </Link>
                            <Link href="#" className="block py-1 text-sm">
                              Hire IT Network
                            </Link>
                            <Link href="#" className="block py-1 text-sm">
                              Other Services
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="events">
                        <AccordionTrigger className="py-3 text-base font-medium">Events</AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-4 flex flex-col space-y-2">
                            <Link href="#" className="block py-1 text-sm">
                              Upcoming Events
                            </Link>
                            <Link href="#" className="block py-1 text-sm">
                              Past Events
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="more">
                        <AccordionTrigger className="py-3 text-base font-medium">More</AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-4 flex flex-col space-y-2">
                            <Link href="#" className="block py-1 text-sm">
                              About Us
                            </Link>
                            <Link href="#" className="block py-1 text-sm">
                              Blog
                            </Link>
                            <Link href="#" className="block py-1 text-sm">
                              Contact
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </nav>

                  <div className="border-t pt-4 space-y-4">
                    <Link href="#" className="block text-center py-2 text-sm font-medium">
                      Login
                    </Link>
                    <Button className="w-full rounded-full text-white">Hire Talent Now</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-50 via-white to-white py-20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-3xl"></div>
            <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-amber-500/10 to-amber-500/5 blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10 pt-16">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
              <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700 mb-6 animate-fade-in ">
                Struggling to find quality junior developers?
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Connect with Exceptional <span className="text-amber-500">Junior Talent</span> in 48 Hours
              </h1>
              <p className="max-w-[800px] text-gray-600 text-lg md:text-xl lg:text-2xl mb-8">
                SMK.DEV vets and prepares exceptional fresh graduates from vocational schools, making them ready to
                contribute to your projects from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg shadow-lg transition-transform hover:scale-105 text-white"
                >
                  Hire Talent Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg transition-transform hover:scale-105"
                >
                  Join as Talent
                </Button>
              </div>
              <div className="relative w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1280&auto=format&fit=crop"
                  alt="Junior developers working together"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="py-16 bg-white overflow-hidden w-full">
  <div className="flex flex-col items-center justify-center space-y-8 text-center">
    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
      Trusted by Leading Companies
    </div>
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
      Why Top Brands Rely on SMK.DEV
    </h2>
    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
      Our proven track record and tailored approach make us the go-to choice for companies hiring top junior tech talent.
    </p>

    {/* Carousel 2 Rows */}
    <div className="w-full space-y-6">
      {[0, 1].map((rowIndex) => (
        <div
          key={rowIndex}
          className={`w-full overflow-hidden relative bg-white ${
            rowIndex === 1 ? 'animate-marquee-slow' : 'animate-marquee'
          }`}
        >
          <div className="flex space-x-16 py-4 whitespace-nowrap">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${rowIndex}-${index}`}
                className="flex h-12 w-32 shrink-0 items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


        {/* KEY FEATURES */}
        <section className="py-24 bg-gradient-to-b from-white to-sky-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Companies Choose SMK.DEV</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We solve your junior talent acquisition challenges with our unique approach
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
              <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 transform rounded-full bg-primary/10 transition-transform group-hover:scale-150"></div>
                <div className="relative">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-md">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Fast Hiring</h3>
                  <p className="text-gray-500">
                    Start working with vetted junior talent in as little as 48 hours, bypassing lengthy recruitment
                    processes.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 transform rounded-full bg-amber-500/10 transition-transform group-hover:scale-150"></div>
                <div className="relative">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-white shadow-md">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Pre-vetted Talent</h3>
                  <p className="text-gray-500">
                    All candidates go through our rigorous technical and soft skills assessment process.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 transform rounded-full bg-primary/10 transition-transform group-hover:scale-150"></div>
                <div className="relative">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-md">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Fresh Perspective</h3>
                  <p className="text-gray-500">
                    Bring innovative thinking and energy to your development team with fresh graduates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="py-24 bg-sky-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-amber-500/5 to-transparent"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Solution</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The SMK.DEV Talent Platform</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A comprehensive platform connecting companies with exceptional junior developers
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="space-y-8">
                    <div className="relative">
                      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary rounded-full"></div>
                      <div className="pl-6">
                        <h3 className="text-2xl font-bold mb-2">Smart Matching Algorithm</h3>
                        <p className="text-gray-600">
                          Our AI-powered matching system analyzes your project requirements and finds the perfect junior
                          developers with the exact skills you need.
                        </p>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-amber-500 rounded-full"></div>
                      <div className="pl-6">
                        <h3 className="text-2xl font-bold mb-2">Seamless Onboarding</h3>
                        <p className="text-gray-600">
                          From interview to start date in as little as 48 hours, with all paperwork and compliance
                          handled by our team.
                        </p>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary rounded-full"></div>
                      <div className="pl-6">
                        <h3 className="text-2xl font-bold mb-2">Ongoing Support</h3>
                        <p className="text-gray-600">
                          Regular check-ins and mentorship resources ensure both companies and junior developers thrive
                          together.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <Button className="rounded-full px-6 py-2 shadow-lg transition-transform hover:scale-105 text-white">
                        See Platform Demo
                      </Button>
                      <Button variant="outline" className="rounded-full px-6 py-2 transition-transform hover:scale-105">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gray-100 flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="pt-8">
                      <Image
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
                        alt="SMK.DEV platform interface"
                        width={600}
                        height={400}
                        className="w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                      <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform transition-transform animate-pulse-slow">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                            JS
                          </div>
                          <div>
                            <h4 className="font-bold">John Smith</h4>
                            <p className="text-sm text-gray-600">Junior React Developer</p>
                          </div>
                          <div className="ml-auto">
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                              Available
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-24 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.1),transparent_50%)]"></div>
          </div>

          <div className="container relative px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Impact in Numbers</h2>
              <p className="max-w-[900px] mx-auto text-gray-500 text-lg">
                SMK.DEV is transforming how companies connect with junior talent
              </p>
            </div>

            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                  <div className="relative">
                    <div className="text-5xl font-bold text-primary mb-2 count-up" data-value="500">
                      500+
                    </div>
                    <h3 className="text-xl font-bold mb-1">Junior Developers</h3>
                    <p className="text-sm text-gray-500">Ready to join your team</p>
                    <div className="w-16 h-1 bg-primary rounded-full mt-4"></div>
                  </div>
                </div>

                <div className="group relative bg-white rounded-2xl p-8 shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                  <div className="relative">
                    <div className="text-5xl font-bold text-amber-500 mb-2 count-up" data-value="200">
                      200+
                    </div>
                    <h3 className="text-xl font-bold mb-1">Companies</h3>
                    <p className="text-sm text-gray-500">Trust our talent pool</p>
                    <div className="w-16 h-1 bg-amber-500 rounded-full mt-4"></div>
                  </div>
                </div>

                <div className="group relative bg-white rounded-2xl p-8 shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                  <div className="relative">
                    <div className="text-5xl font-bold text-primary mb-2">48h</div>
                    <h3 className="text-xl font-bold mb-1">Average Hiring</h3>
                    <p className="text-sm text-gray-500">From request to onboarding</p>
                    <div className="w-16 h-1 bg-primary rounded-full mt-4"></div>
                  </div>
                </div>

                <div className="group relative bg-white rounded-2xl p-8 shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                  <div className="relative">
                    <div className="text-5xl font-bold text-amber-500 mb-2">95%</div>
                    <h3 className="text-xl font-bold mb-1">Satisfaction</h3>
                    <p className="text-sm text-gray-500">From our clients</p>
                    <div className="w-16 h-1 bg-amber-500 rounded-full mt-4"></div>
                  </div>
                </div>
              </div>

              <div className="mt-16 bg-gradient-to-r from-primary to-amber-500 rounded-2xl p-8 shadow-xl text-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">3x</div>
                    <p>Faster hiring process compared to traditional recruitment</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">40%</div>
                    <p>Lower recruitment costs for companies</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">85%</div>
                    <p>Of junior developers find jobs within 2 weeks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS - Redesigned to be more modern and stylish */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.05),transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(245,158,11,0.05),transparent_40%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Benefits</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Junior Talent Makes Sense</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the advantages of bringing fresh talent to your development team
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative bg-gradient-to-br from-white to-sky-50 rounded-2xl p-8 shadow-lg overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl border border-gray-100">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        Cost-Effective
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Junior developers offer excellent value while bringing fresh skills and enthusiasm to your team.
                        Reduce hiring costs by up to 40% compared to senior developers.
                      </p>
                      <div className="flex items-center text-sm text-primary font-medium">
                        <span>Learn more</span>
                        <ChevronRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 shadow-lg overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl border border-gray-100">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center">
                      <Users className="h-8 w-8 text-amber-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-500 transition-colors">
                        Team Growth
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Build a sustainable talent pipeline and develop future tech leaders. Junior developers grow with
                        your company and adapt to your specific workflows.
                      </p>
                      <div className="flex items-center text-sm text-amber-500 font-medium">
                        <span>Learn more</span>
                        <ChevronRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-white to-sky-50 rounded-2xl p-8 shadow-lg overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl border border-gray-100">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        Fresh Perspectives
                      </h3>
                      <p className="text-gray-600 mb-4">
                        New developers bring innovative thinking and modern approaches to problems. They challenge
                        established patterns and help your team stay current.
                      </p>
                      <div className="flex items-center text-sm text-primary font-medium">
                        <span>Learn more</span>
                        <ChevronRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 shadow-lg overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl border border-gray-100">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center">
                      <Code className="h-8 w-8 text-amber-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-500 transition-colors">
                        Modern Tech Skills
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Recent graduates are trained in the latest technologies and development practices. They bring
                        cutting-edge knowledge directly from their education.
                      </p>
                      <div className="flex items-center text-sm text-amber-500 font-medium">
                        <span>Learn more</span>
                        <ChevronRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS - Redesigned with a more visual approach */}
        <section className="py-24 bg-gradient-to-b from-white to-sky-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Process</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How SMK.DEV Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A simple 4-step process to connect with exceptional junior talent
                </p>
              </div>
            </div>

            <div className="relative mx-auto max-w-6xl">
              {/* Process flow visualization */}
              <div className="hidden md:block absolute top-[45%] left-0 right-0 h-2 bg-gray-200 rounded-full z-0"></div>
              <div className="hidden md:block absolute top-[45%] left-0 w-[75%] h-2 bg-gradient-to-r from-primary via-primary/80 to-amber-500 rounded-full z-10"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-20">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-8 relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl transform scale-150 opacity-70"></div>
                    <div className="relative w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-primary">
                      <div className="text-3xl font-bold text-primary">1</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg h-full w-full">
                    <h3 className="text-xl font-bold mb-4 text-primary">Submit Requirements</h3>
                    <p className="text-gray-600">
                      Tell us about your project needs and the skills you're looking for in your ideal junior developer.
                    </p>
                  </div>
                  <div className="hidden md:block absolute -right-3 top-[45%] w-6 h-6 bg-primary rounded-full z-30"></div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="mb-8 relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl transform scale-150 opacity-70"></div>
                    <div className="relative w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-primary/80">
                      <div className="text-3xl font-bold text-primary/80">2</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg h-full w-full">
                    <h3 className="text-xl font-bold mb-4 text-primary/80">Review Candidates</h3>
                    <p className="text-gray-600">
                      We match you with pre-vetted junior developers who fit your requirements within 24 hours.
                    </p>
                  </div>
                  <div className="hidden md:block absolute -right-3 top-[45%] w-6 h-6 bg-primary/80 rounded-full z-30"></div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="mb-8 relative">
                    <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-xl transform scale-150 opacity-70"></div>
                    <div className="relative w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-primary/60">
                      <div className="text-3xl font-bold text-primary/60">3</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg h-full w-full">
                    <h3 className="text-xl font-bold mb-4 text-primary/60">Interview & Select</h3>
                    <p className="text-gray-600">
                      Conduct interviews through our platform and select the best candidate for your team.
                    </p>
                  </div>
                  <div className="hidden md:block absolute -right-3 top-[45%] w-6 h-6 bg-primary/60 rounded-full z-30"></div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="mb-8 relative">
                    <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl transform scale-150 opacity-70"></div>
                    <div className="relative w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-amber-500">
                      <div className="text-3xl font-bold text-amber-500">4</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg h-full w-full">
                    <h3 className="text-xl font-bold mb-4 text-amber-500">Start Working</h3>
                    <p className="text-gray-600">
                      Begin collaborating with your new junior developer within 48 hours of your initial request.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <Button className="rounded-full px-8 py-3 bg-gradient-to-r from-primary to-amber-500 text-white shadow-lg hover:shadow-xl transition-all">
                  Start Your Hiring Process Today <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* INTEGRATIONS */}
        <section className="py-24 bg-sky-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Tech Stack</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technologies Our Talent Works With</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our junior developers are trained in modern technologies and frameworks
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1 md:col-span-3 mb-8">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-sm font-mono">tech-stack.js</div>
                      <div></div>
                    </div>
                    <div className="p-6 font-mono text-sm overflow-x-auto">
                      <pre className="language-javascript">
                        <code className="text-gray-800">
                          <span className="text-purple-600">const</span>{" "}
                          <span className="text-blue-600">frontendTechnologies</span> = [<br />
                          &nbsp;&nbsp;<span className="text-green-600">'React'</span>,{" "}
                          <span className="text-green-600">'Vue.js'</span>,{" "}
                          <span className="text-green-600">'Angular'</span>,{" "}
                          <span className="text-green-600">'Next.js'</span>,{" "}
                          <span className="text-green-600">'TypeScript'</span>,{" "}
                          <span className="text-green-600">'Tailwind CSS'</span>
                          <br />
                          ];
                          <br />
                          <br />
                          <span className="text-purple-600">const</span>{" "}
                          <span className="text-blue-600">backendTechnologies</span> = [<br />
                          &nbsp;&nbsp;<span className="text-green-600">'Node.js'</span>,{" "}
                          <span className="text-green-600">'Python'</span>,{" "}
                          <span className="text-green-600">'Java'</span>, <span className="text-green-600">'PHP'</span>,{" "}
                          <span className="text-green-600">'Ruby'</span>, <span className="text-green-600">'Go'</span>
                          <br />
                          ];
                          <br />
                          <br />
                          <span className="text-purple-600">const</span>{" "}
                          <span className="text-blue-600">databaseTechnologies</span> = [<br />
                          &nbsp;&nbsp;<span className="text-green-600">'MongoDB'</span>,{" "}
                          <span className="text-green-600">'PostgreSQL'</span>,{" "}
                          <span className="text-green-600">'MySQL'</span>,{" "}
                          <span className="text-green-600">'Firebase'</span>,{" "}
                          <span className="text-green-600">'Redis'</span>
                          <br />
                          ];
                          <br />
                          <br />
                          <span className="text-purple-600">function</span>{" "}
                          <span className="text-yellow-600">findDevelopers</span>(
                          <span className="text-orange-600">technologies</span>) {"{"}
                          <br />
                          &nbsp;&nbsp;<span className="text-purple-600">return</span> developers.
                          <span className="text-yellow-600">filter</span>(dev {"=> {"}
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">return</span> dev.skills.
                          <span className="text-yellow-600">some</span>(skill {"=> "} technologies.
                          <span className="text-yellow-600">includes</span>(skill));
                          <br />
                          &nbsp;&nbsp;{"}"});
                          <br />
                          {"}"}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="tech-card group relative bg-white rounded-xl p-6 shadow-lg overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Image
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                          alt="React"
                          width={30}
                          height={30}
                          className="animate-float"
                        />
                      </div>
                      <h3 className="text-xl font-bold">Frontend</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Our junior developers are proficient in modern frontend frameworks and libraries.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        React
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Vue.js
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Next.js
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        TypeScript
                      </span>
                    </div>
                  </div>
                </div>

                <div className="tech-card group relative bg-white rounded-xl p-6 shadow-lg overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mr-4">
                        <Image
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
                          alt="Node.js"
                          width={30}
                          height={30}
                          className="animate-float"
                        />
                      </div>
                      <h3 className="text-xl font-bold">Backend</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Build robust server-side applications with our backend-focused junior developers.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                        Node.js
                      </span>
                      <span className="inline-flex items-center rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                        Python
                      </span>
                      <span className="inline-flex items-center rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                        Java
                      </span>
                      <span className="inline-flex items-center rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                        PHP
                      </span>
                    </div>
                  </div>
                </div>

                <div className="tech-card group relative bg-white rounded-xl p-6 shadow-lg overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Image
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png"
                          alt="AWS"
                          width={30}
                          height={30}
                          className="animate-float"
                        />
                      </div>
                      <h3 className="text-xl font-bold">DevOps & Cloud</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Our junior developers have experience with modern cloud platforms and DevOps practices.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        AWS
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Docker
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        CI/CD
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Git
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          <div className="px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from companies that have hired junior talent through SMK.DEV
                </p>
              </div>
            </div>
            
            <div className="mx-auto max-w-6xl">
              <div className="relative">
                <div className="testimonial-slider flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4">
                  <div className="testimonial-slide min-w-[85%] md:min-w-[40%] lg:min-w-[30%] snap-start mr-6 animate-slide-left">
                    <div className="h-full flex flex-col bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center space-x-4 mb-4">
                        <Image
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop"
                          alt="Client"
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="text-lg font-bold">Sarah Johnson</h3>
                          <p className="text-sm text-gray-500">CTO, TechStart</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                        <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                        <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                        <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                        <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                      </div>
                      <p className="text-gray-600 flex-grow">
                        "We hired two junior developers through SMK.DEV and they've been incredible additions to our team.
                        They came in ready to contribute and have grown rapidly with our guidance."
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-sm text-primary font-medium">
                          Hired: 2 React Developers
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="testimonial-slide min-w-[85%] md:min-w-[40%] lg:min-w-[30%] snap-start mr-6 animate-slide-left animation-delay-300">
                    <div className="h-full flex flex-col bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center space-x-4 mb-4">
                        <Image
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                          alt="Client"
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="text-lg font-bold">Michael Chen</h3>
                          <p className="text-sm text-gray-500">Engineering Manager, DataFlow</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                        <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                        <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                        <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                        <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                      </div>
                      <p className="text-gray-600 flex-grow">
                        "The quality of junior talent from SMK.DEV is exceptional. Their vetting process ensures we only
                        interview candidates who are truly ready to contribute to our projects."
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-sm text-primary font-medium">
                          Hired: 3 Backend Developers
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="testimonial-slide min-w-[85%] md:min-w-[40%] lg:min-w-[30%] snap-start mr-6 animate-slide-left animation-delay-600">
                    <div className="h-full flex flex-col bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center space-x-4 mb-4">
                        <Image
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=120&auto=format&fit=crop"
                          alt="Client"
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="text-lg font-bold">Lisa Rodriguez</h3>
                          <p className="text-sm text-gray-500">Product Lead, AppWorks</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                        <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                        <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                        <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                        <Star className="h-5 w-5 text-amber-500" />
                      </div>
                      <p className="text-gray-600 flex-grow">
                        "SMK.DEV has transformed how we think about junior hiring. Their platform made it easy to find the
                        right talent quickly, and the developers we hired have exceeded our expectations."
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-sm text-primary font-medium">
                          Hired: 1 Full-Stack Developer
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="testimonial-slide min-w-[85%] md:min-w-[40%] lg:min-w-[30%] snap-start animate-slide-left animation-delay-900">
                    <div className="h-full flex flex-col bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center space-x-4 mb-4">
                        <Image
                          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=120&auto=format&fit=crop"
                          alt="Client"
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="text-lg font-bold">David Wilson</h3>
                          <p className="text-sm text-gray-500">CEO, TechInnovate</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                        <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                        <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                        <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                        <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                      </div>
                      <p className="text-gray-600 flex-grow">
                        "As a startup, finding affordable talent that can still deliver quality work was challenging until we found SMK.DEV. Their junior developers have the perfect balance of skills and eagerness to learn."
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-sm text-primary font-medium">
                          Hired: 2 Mobile Developers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
                  <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <ChevronRight className="h-6 w-6 transform rotate-180" />
                  </button>
                </div>
                
                <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
                  <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="flex justify-center space-x-2 mt-6">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Redesigned to be more visually appealing */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.05),transparent_40%)]"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to know about hiring junior talent through SMK.DEV
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-4xl mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search for answers..."
                  className="pl-10 py-6 text-base rounded-full border-gray-200 focus:border-primary focus:ring-primary shadow-sm"
                />
              </div>
            </div>

            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 gap-8">
                <div className="bg-gradient-to-r from-white to-sky-50 rounded-2xl p-8 shadow-lg border border-gray-100">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b border-gray-100 py-2">
                      <AccordionTrigger className="text-lg font-semibold hover:text-primary flex items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <Search className="h-4 w-4 text-primary" />
                          </div>
                          <span>How does SMK.DEV vet junior talent?</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pl-11">
                        <div className="bg-white p-4 rounded-xl mt-2">
                          Our vetting process includes technical assessments, coding challenges, and behavioral
                          interviews. We evaluate both technical skills and soft skills to ensure candidates are ready
                          to contribute to your projects from day one. Each candidate goes through a rigorous 5-step
                          process:
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Initial application screening</li>
                            <li>Technical assessment</li>
                            <li>Coding challenge</li>
                            <li>Behavioral interview</li>
                            <li>Final evaluation by senior developers</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border-b border-gray-100 py-2">
                      <AccordionTrigger className="text-lg font-semibold hover:text-primary flex items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center mr-3">
                            <Zap className="h-4 w-4 text-amber-600" />
                          </div>
                          <span>How quickly can we hire a junior developer?</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pl-11">
                        <div className="bg-white p-4 rounded-xl mt-2">
                          Most companies are able to hire within 48 hours of submitting their requirements. Our
                          pre-vetted talent pool allows us to match you with qualified candidates quickly. Our typical
                          timeline:
                          <div className="flex items-center mt-3 text-sm">
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs mr-2">
                              1
                            </div>
                            <span>Submit requirements (Day 1)</span>
                            <div className="h-0.5 w-12 bg-gray-200 mx-2"></div>
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs mr-2">
                              2
                            </div>
                            <span>Review candidates (Day 1)</span>
                            <div className="h-0.5 w-12 bg-gray-200 mx-2"></div>
                            <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs mr-2">
                              3
                            </div>
                            <span>Start working (Day 2)</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border-b border-gray-100 py-2">
                      <AccordionTrigger className="text-lg font-semibold hover:text-primary flex items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <Code className="h-4 w-4 text-primary" />
                          </div>
                          <span>What technologies do your junior developers know?</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pl-11">
                        <div className="bg-white p-4 rounded-xl mt-2">
                          Our junior developers are trained in modern technologies including React, Node.js, Python,
                          Java, and more. We can match you with candidates who have experience in the specific
                          technologies your project requires.
                          <div className="grid grid-cols-2 gap-4 mt-3">
                            <div>
                              <h4 className="font-semibold text-primary">Frontend</h4>
                              <p className="text-sm">React, Vue.js, Angular, Next.js, TypeScript</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-amber-600">Backend</h4>
                              <p className="text-sm">Node.js, Python, Java, PHP, Ruby, Go</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-primary">Database</h4>
                              <p className="text-sm">MongoDB, PostgreSQL, MySQL, Firebase</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-amber-600">DevOps</h4>
                              <p className="text-sm">AWS, Docker, CI/CD, Git</p>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border-b border-gray-100 py-2">
                      <AccordionTrigger className="text-lg font-semibold hover:text-primary flex items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center mr-3">
                            <CheckCircle className="h-4 w-4 text-amber-600" />
                          </div>
                          <span>Do you offer any guarantees?</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pl-11">
                        <div className="bg-white p-4 rounded-xl mt-2">
                          Yes, we offer a 2-week trial period. If you're not satisfied with the junior developer for any
                          reason, we'll find a replacement at no additional cost. Our guarantee includes:
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>2-week trial period</li>
                            <li>Free replacement if not satisfied</li>
                            <li>Ongoing support throughout the placement</li>
                            <li>Regular check-ins to ensure satisfaction</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="border-b border-gray-100 py-2">
                      <AccordionTrigger className="text-lg font-semibold hover:text-primary flex items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <Users className="h-4 w-4 text-primary" />
                          </div>
                          <span>What kind of support do you provide after hiring?</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pl-11">
                        <div className="bg-white p-4 rounded-xl mt-2">
                          We provide ongoing support to both companies and junior developers. Our team checks in
                          regularly to ensure the placement is successful and offers mentorship resources to help junior
                          developers grow. Our support includes:
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Weekly check-ins during the first month</li>
                            <li>Monthly progress reports</li>
                            <li>Access to mentorship resources</li>
                            <li>Technical support when needed</li>
                            <li>Career development guidance for junior developers</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6" className="py-2">
                      <AccordionTrigger className="text-lg font-semibold hover:text-primary flex items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center mr-3">
                            <Lightbulb className="h-4 w-4 text-amber-600" />
                          </div>
                          <span>What if we need to scale our team quickly?</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pl-11">
                        <div className="bg-white p-4 rounded-xl mt-2">
                          Our platform is designed for scalability. We can help you hire multiple junior developers in a
                          short timeframe, all pre-vetted and ready to contribute to your projects. Our scaling
                          solutions include:
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Team hiring packages for 3+ developers</li>
                            <li>Dedicated account manager for large-scale hiring</li>
                            <li>Custom onboarding plans for teams</li>
                            <li>Team-building activities and resources</li>
                            <li>Discounted rates for multiple hires</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">Still have questions?</p>
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
                >
                  Contact Our Support Team
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTV (Call to Value) - Simplified */}
        <section className="py-24 bg-gradient-to-r from-primary/5 to-amber-500/5 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-3xl"></div>
            <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-amber-500/10 to-amber-500/5 blur-3xl"></div>
          </div>

          <div className="container relative px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
                Transform Your Team With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">
                  Exceptional Junior Talent
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Join hundreds of innovative companies that have accelerated their development with pre-vetted junior
                developers ready to contribute from day one.
              </p>
              <Button
                size="lg"
                className="rounded-full px-10 py-7 text-xl shadow-xl transition-transform hover:scale-105 bg-gradient-to-r from-primary to-amber-500 text-white"
              >
                Hire Talent Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t bg-gray-50">
        <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold text-xl">
                  <span className="text-primary">SMK</span>
                  <span className="text-amber-500">.DEV</span>
                </span>
              </Link>
              <p className="text-gray-500">Connecting exceptional junior talent with innovative companies</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-500 hover:text-primary">
                  <span className="sr-only">Twitter</span>
                  <ExternalLink className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  <span className="sr-only">LinkedIn</span>
                  <ExternalLink className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  <span className="sr-only">GitHub</span>
                  <ExternalLink className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">For Companies</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Hire Talent
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">For Talent</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Join as Talent
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Learning Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Career Growth
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-gray-500">
            <p>© 2023 SMK.DEV. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
