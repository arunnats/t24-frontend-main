import styles from './Quicklinks.module.css';
import Link from "next/link";
export default function Quicklink() {
  return (
    <div className={styles.head}>
    
      <div className="flex flex-col flex-1 border-2 p-4" style={{ backgroundColor: 'rgba(242, 224, 212, 1)' }}>
      <div className="flex mb-2 pt-1 border-4 justify-center text-sm" style={{ borderColor: 'rgba(160, 124, 114, 1)' }}>Quick Links</div>
        <div className="flex justify-between border-4 p-2" style={{ borderColor: 'rgba(160, 124, 114, 1)' }}>
          <div className="flex-1 mr-4 pr-4 border-r-2 " style={{ borderColor: 'rgba(160, 124, 114, 1)' }}>
            <Link href="/events" className="flex mb-1">Competitions</Link>
            <Link href="/events" className="flex mb-1">Events</Link>
            <Link href="/lectures" className="flex mb-1">Lectures</Link>
            <Link href="/contact" className="flex mb-1">Contact</Link>
          </div>
          <div className="flex-1 text-right">
            <Link href="/schedule" className="flex mb-1">Schedule</Link>
            <Link href="/workshops" className="flex mb-1">Workshops</Link>
            <Link href="/FAQ" className="flex mb-1">FAQs</Link>
            <Link href="/team" className="flex mb-1">Team</Link>
          </div>
        </div>
      </div>
  </div>
  );
}
