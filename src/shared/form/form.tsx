import { PropsWithChildren } from 'react'
import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form'

type Props<T extends FieldValues> = {
  methods: UseFormReturn<T>
  onSubmit: SubmitHandler<T>
  className?: string
}

export default function Form<T extends FieldValues>({
  methods,
  onSubmit,
  children,
  className,
}: PropsWithChildren<Props<T>>) {
  const { handleSubmit } = methods

  return (
    <FormProvider {...methods}>
      <form
        className={className}
        onSubmit={handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  )
}
