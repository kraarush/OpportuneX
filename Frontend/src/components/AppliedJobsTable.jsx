import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";

const AppliedJobsTable = () => {
  return (
    <div className="my-2">
      <Table>
        <TableCaption>A List of your Applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>25-03-2025</TableCell>
            <TableCell>Full Stack Engineer</TableCell>
            <TableCell>J P Morgan chase</TableCell>
            <TableCell className="text-right">
              <Badge>Pending</Badge>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>25-03-2025</TableCell>
            <TableCell>Full Stack Engineer</TableCell>
            <TableCell>J P Morgan chase</TableCell>
            <TableCell className="text-right">
              <Badge className="bg-[#449d44]">Accepted</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobsTable;
