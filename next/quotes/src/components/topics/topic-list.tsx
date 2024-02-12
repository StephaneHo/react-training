import { db } from "@/db";
import { paths } from "@/path";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

export default async function TopicList() {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topicShow(topic.tag)}>
          <Chip color="warning" variant="shadow">
            {topic.name}
          </Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-row gap-2 flex-wrap">{renderedTopics}</div>;
}
