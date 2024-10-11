import styles from './Quicklinks.module.css';
export default function Quicklink() {
  return (
    <div className={styles.head}>
    
    <div className="flex flex-col flex-1 rounded-xl border-2 p-4 bg-orange-100">
      <div className="flex mb-4 border-orange-500 border-4 justify-center"  >Quick Links</div>
      <div className="flex justify-between border-orange-500 border-4 p-2">
        <div className="flex-1 mr-4 pr-4 border-r-2 border-orange-500">
          <a href="#" className="flex mb-1">Competitions</a>
          <a href="#" className="flex mb-1">Events</a>
          <a href="#" className="flex mb-1">Lectures</a>
          <a href="#" className="flex mb-1">Contact</a>
        </div>
        <div className="flex-1 text-right">
          <a href="#" className="flex mb-1">Schedule</a>
          <a href="#" className="flex mb-1">Workshops</a>
          <a href="#" className="flex mb-1">FAQs</a>
          <a href="#" className="flex mb-1">Team</a>
        </div>
      </div>
    </div>
</div>
  );
}
