import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
  HomeIcon,
  LineChartIcon,
  Package2Icon,
  PackageIcon,
  SearchIcon,
  UsersIcon,
} from "lucide-react";

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <div className="grid h-screen w-full min-h-screen lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-0">
          <div className="flex bg-[#51ae55] text-white h-[60px] items-center border-b px-6">
            <Link
              className="flex items-center gap-2 font-semibold"
              href="#"
              passHref
            >
              <Package2Icon className="h-6 w-6" />
              <span className="">CGPA Caculator</span>
            </Link>
            {/* <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button> */}
          </div>
          <div className="flex-1 bg-[#51ae55]  overflow-auto py-2">
            <nav className="flex flex-col h-full bg-[#51ae55] text-white  px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg  px-3 py-2   transition-all "
                href="#"
                passHref
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg  px-3 py-2   transition-all "
                href="#"
                passHref
              >
                <UsersIcon className="h-4 w-4" />
                Classes
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg  px-3 py-2   transition-all "
                href="#"
                passHref
              >
                <LineChartIcon className="h-4 w-4" />
                Grading
              </Link>
            </nav>
          </div>
          {/* <div className="mt-auto p-4">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="sm">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link
            className="lg:hidden flex items-center gap-2 font-semibold"
            href="#"
            passHref
          >
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search students or classes..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="border shadow-sm rounded-lg">
            <div className="flex justify-end p-4 gap-3">
              <button className="w-44 rounded-md border text-sm py-1">
                Edit Info
              </button>
              <button className="w-44 rounded-md border text-sm py-1">
                Save Info
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 p-4">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" type="text" />
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="john.doe@example.com"
                type="email"
              />
              <Label htmlFor="username">Phone number</Label>
              <Input id="username" placeholder="09045156178" type="text" />
              <Label htmlFor="department">Department</Label>
              <Input id="department" placeholder="Engineering" type="text" />
              {/* <Label htmlFor="level">Level</Label>
              <Input id="level" placeholder="Senior" type="text" /> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const BellIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
};

// Define other icon components in a similar way...

export default Page;
