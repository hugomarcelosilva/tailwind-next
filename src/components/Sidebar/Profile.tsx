import { LogOut } from 'lucide-react'

import { Button } from '../Button'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/hugomarcelosilva.png"
        className="h-10 w-10 rounded-full"
        alt="Profile picture"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Hugo Marcelo
        </span>
        <span className=" truncate text-sm text-zinc-500">
          hugo.marcelo91@gmail.com
        </span>
      </div>
      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
