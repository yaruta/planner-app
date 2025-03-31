import Card from "../ui/Card";

export default function NotesForm() {
  return (
    <Card>
      <form>
        <h2>Notes</h2>
        <textarea name="notes" id="notes" cols="30" rows="10"></textarea>
      </form>
    </Card>
  );
}
