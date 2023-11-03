import { Bold, Italic, Link2, List, ListOrdered, Mail } from 'lucide-react'

import * as Input from '@/components/Form/Input'
import * as FileInput from '@/components/Form/FileInput'
import * as Select from '@/components/Form/Select'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'
import { SettingsTabs } from './SettingsTabs'
import { CountrySelect } from './CountrySelect'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-700 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control
                  name="firstName"
                  id="firstName"
                  type="text"
                  defaultValue="Hugo"
                />
              </Input.Root>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastNameName"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
                >
                  Last name
                </label>

                <Input.Root>
                  <Input.Control
                    name="lastName"
                    type="text"
                    defaultValue="Marcelo"
                  />
                </Input.Root>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email address
            </label>
            <div className="flex gap-3">
              <Input.Root>
                <Input.Prefix>
                  <Mail className="h-5 w-5 text-zinc-500" />
                </Input.Prefix>
                <Input.Control
                  name="email"
                  id="email"
                  type="email"
                  defaultValue="hugomarcelo91@gmail.com"
                />
              </Input.Root>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Role
            </label>
            <div className="flex gap-3">
              <Input.Root>
                <Input.Control name="role" id="role" defaultValue="DEV" />
              </Input.Root>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <span className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-100">
              Country
            </span>

            <CountrySelect />
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <span className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-100">
              Timezone
            </span>
            <Select.Root name="timezone">
              <Select.Trigger>
                <Select.Value placeholder="Select your timezone..." />
              </Select.Trigger>

              <Select.Content>
                <Select.Item value="utc-8">
                  <Select.ItemText>
                    Pacific Standard Time (PST)
                    <span className="text-sm text-zinc-500">UTC 08:00</span>
                  </Select.ItemText>
                </Select.Item>
                <Select.Item value="utc-3">
                  <Select.ItemText>
                    Brasilia Time Zone (BRT)
                    <span className="text-sm text-zinc-500">UTC -03:00</span>
                  </Select.ItemText>
                </Select.Item>
              </Select.Content>
            </Select.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select.Root defaultValue="normal">
                  <Select.Trigger>
                    <Select.Value />
                  </Select.Trigger>

                  <Select.Content>
                    <Select.Item value="normal">
                      <Select.ItemText>Normal text</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="md">
                      <Select.ItemText>Markdown</Select.ItemText>
                    </Select.Item>
                  </Select.Content>
                </Select.Root>

                <div className="flex items-center gap-1">
                  <Button variant="ghost" type="button">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <Link2 className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialize in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root id="projects">
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
