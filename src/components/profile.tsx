import profile from '../assets/profile.jpg';

interface Props {
  large?: boolean;
}

export default function Profile({ large }: Props) {
  return (
    <div
      className={
        `bg-white rounded-full flex items-center justify-center ` +
        (large ? `w-36 h-36` : `h-14 w-14`)
      }
    >
      <img
        src={profile}
        className={`rounded-full ` + (large ? 'w-36 h-36' : 'w-13 h-13')}
      />
    </div>
  );
}
