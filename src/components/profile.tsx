import profile from '../assets/profile.jpg';

export default function Profile() {
  return (
    <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center">
      <img src={profile} className="rounded-full w-13 h-13" />
    </div>
  );
}
