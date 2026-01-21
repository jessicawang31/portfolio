import type { SkillGroup } from "../data/skills";

type SkillsProps = {
  groups: SkillGroup[];
};

export default function Skills({ groups }: SkillsProps) {
  return (
    <section className="border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-10 max-w-6xl">
        <h2 className="text-sm font-semibold tracking-widest text-gray-600 dark:text-gray-400">
          SKILLS
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-gray-200 dark:border-gray-800 p-5"
            >
              <h3 className="text-base font-semibold text-black dark:text-white">
                {group.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={`${group.title}-${item}`}
                    className="inline-flex items-center rounded-md border border-gray-200 dark:border-gray-800 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}