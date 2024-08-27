import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const initialProjects = [
  { id: 1, name: "Lanzamiento de aplicaciones", icon: "🚀" },
  { id: 2, name: "Cocina Reno", icon: "🏠" },
  { id: 3, name: "Hábitos diarios", icon: "🌞" },
  { id: 4, name: "Recetas", icon: "🍔" },
  { id: 5, name: "Trabajo de diseño", icon: "🎨" },
];

const initialTasks = [
  {
    id: 1,
    name: "Launch readiness",
    completed: true,
    assignee: { initials: "JD", avatar: "/placeholder.svg?height=32&width=32" },
  },
  {
    id: 2,
    name: "Value proposition",
    completed: true,
    assignee: { initials: "AS", avatar: "/placeholder.svg?height=32&width=32" },
    icon: "M",
  },
  {
    id: 3,
    name: "Marketing strategy",
    completed: false,
    assignee: { initials: "TK", avatar: "/placeholder.svg?height=32&width=32" },
  },
  {
    id: 4,
    name: "Design system update",
    completed: false,
    assignee: { initials: "EL", avatar: "/placeholder.svg?height=32&width=32" },
    icon: "F",
  },
  {
    id: 5,
    name: "Website design & dev",
    completed: false,
    assignee: { initials: "MR", avatar: "/placeholder.svg?height=32&width=32" },
  },
  {
    id: 6,
    name: "Pricing strategy",
    completed: true,
    assignee: { initials: "AS", avatar: "/placeholder.svg?height=32&width=32" },
    icon: "S",
  },
  {
    id: 7,
    name: "Prepare analytics",
    completed: false,
    assignee: { initials: "JD", avatar: "/placeholder.svg?height=32&width=32" },
  },
];

const teamMembers = [
  { id: 1, name: "John Doe", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 2, name: "Jane Smith", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 3, name: "Bob Johnson", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 4, name: "Alice Brown", avatar: "/placeholder.svg?height=32&width=32" },
  {
    id: 5,
    name: "Charlie Davis",
    avatar: "/placeholder.svg?height=32&width=32",
  },
];

const AppLaunchComplete = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div className="flex flex-col flex-row md:flex-row m-auto">
        <aside className="w-52 bg-white p-4 hidden md:block rounded-3xl overflow-hidden shadow-md">
          <h2 className="text-lg font-semibold mb-4">Lists</h2>
          <nav>
            {initialProjects.map(project => (
              <a
                key={project.id}
                href="#"
                className={`flex items-center px-2 py-2 text-sm rounded-md ${
                  project.id === 1
                    ? "bg-red-100 text-red-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span className="mr-2">{project.icon}</span>
                {project.name}
              </a>
            ))}
          </nav>
        </aside>

        <div className="flex-1 flex flex-col ">
          <Card className="h-10 m-2 flex-1  rounded-3xl ">
            <CardHeader className="flex flex-col space-y-1.5 pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold">App Launch</CardTitle>
                <div className="flex -space-x-2">
                  {teamMembers.map(member => (
                    <Avatar
                      key={member.id}
                      className="border-2 border-background w-8 h-8 rounded-full overflow-hidden"
                    >
                      <AvatarImage
                        src={member.avatar}
                        alt={member.name}
                        className="rounded-full"
                      />
                      <AvatarFallback className="rounded-full">
                        {member.name
                          .split(" ")
                          .map(n => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  {teamMembers.length > 4 && (
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 text-xs">
                      +{teamMembers.length - 4}
                    </div>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Hey team, here's a quick recap of what we're working on ahead of
                the launch. Feel free to add any more notes or details to the
                tasks.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks.map(task => (
                  <div key={task.id} className="flex items-center space-x-4">
                    <Checkbox
                      id={`task-${task.id}`}
                      checked={task.completed}
                      onCheckedChange={() => toggleTaskCompletion(task.id)}
                    />
                    <label
                      htmlFor={`task-${task.id}`}
                      className={`flex-grow text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                        task.completed
                          ? "line-through text-gray-400"
                          : "text-gray-900"
                      }`}
                    >
                      {task.name}
                    </label>
                    <div className="flex items-center space-x-2">
                      {task.icon && (
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-blue-600 text-xs font-medium">
                          {task.icon}
                        </div>
                      )}
                      <Avatar className="w-6 h-6 rounded-full overflow-hidden">
                        <AvatarImage
                          src={task.assignee.avatar}
                          alt={task.assignee.initials}
                          className="rounded-full"
                        />
                        <AvatarFallback className="rounded-full text-xs bg-gray-200 text-gray-600">
                          {task.assignee.initials}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-52 lg:block w-1/3 rounded-3xl overflow-hidden shadow-md">
          <img
            src="https://cdn.pixabay.com/photo/2022/11/22/10/37/house-7609267_960_720.jpg"
            alt="Paisaje nocturno con luna llena"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default AppLaunchComplete;
