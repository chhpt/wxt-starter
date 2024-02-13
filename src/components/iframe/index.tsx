export interface ILoaderProps {
  url: string
}

export function IFrameLoader({ url }: ILoaderProps) {
  return (
    <iframe
      src={url}
      className="tw-w-full tw-h-full"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    />
  )
}
