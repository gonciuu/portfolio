import Button from './components/Button';

export default function NotFound() {
  return (
    <div className='py-24'>
      <h2>Oops! The Page You are Looking for is on Vacation!</h2>
      <p className='pb-8 pt-2'>
        It seems the page you aree looking for decided it needed a break and
        jetted off to a tropical island!
      </p>
      <Button href='/'>Take Me Home, Pagey Roads!</Button>
    </div>
  );
}
