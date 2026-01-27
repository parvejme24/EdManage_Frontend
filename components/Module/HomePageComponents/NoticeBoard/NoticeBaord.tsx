import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Notice = {
  date: string;
  title: string;
};

const notices: Notice[] = [
  {
    date: "23/12/2024",
    title:
      "All outstanding tuition fees must be paid online by 15 December 2024.",
  },
  {
    date: "20/12/2024",
    title:
      "Final exam schedule for the current academic term has been published.",
  },
  {
    date: "18/12/2024",
    title:
      "Semester registration deadline has been extended until further notice.",
  },
  {
    date: "15/12/2024",
    title:
      "Online classes will remain closed on account of institutional maintenance.",
  },
];

export default function NoticeBoard() {
  return (
    <section className="container mx-auto max-w-7xl mt-20 p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-3xl font-bold mb-6">
        Notice Board
      </h3>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Button className="bg-emerald-700 hover:bg-emerald-800 text-white">
          Institutional Notices
        </Button>
        <Button variant="outline" className="border-emerald-700 text-emerald-700">
          Academic Notices
        </Button>
        <Button variant="outline" className="border-emerald-700 text-emerald-700">
          Exam & Results
        </Button>
        <Button variant="outline" className="border-emerald-700 text-emerald-700">
          Tuition Fee Notices
        </Button>
      </div>

      {/* Notice Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg max-h-72">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center font-semibold">
                Date
              </TableHead>
              <TableHead className="font-semibold">
                Notice Title
              </TableHead>
              <TableHead className="text-center font-semibold">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {notices.map((notice, index) => (
              <TableRow
                key={index}
                className="hover:bg-gray-100 transition"
              >
                <TableCell className="text-center whitespace-nowrap">
                  {notice.date}
                </TableCell>

                <TableCell className="text-gray-700">
                  {notice.title}
                </TableCell>

                <TableCell className="text-center">
                  <Button
                    size="sm"
                    className="bg-emerald-700 hover:bg-emerald-800 text-white"
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
