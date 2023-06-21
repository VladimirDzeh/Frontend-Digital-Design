import createNavbar from '@/components/nav-bar/nav-bar';
import createProjectListItem from '@/components/project-list-item/project-list-item';
import createTackListItem from '@/components/task-list-item/task-list-item';
import createPlug from '@/components/plug/plug';


export default function createMarkup(dataBase) {
    let { projects, tasks, content } = dataBase;

    return `
        <div class="wrapper">
            <header class="header">
                <div class="container">
                    ${createNavbar()}
                </div>
            </header>    
            <main class="main">
                <div class="container">
                    ${createProjectListItem(projects)}
                    ${createTackListItem(tasks)}
                    ${createPlug(content)}
                </div>
            </main>
            <footer class="footer">
            </footer>
        </div>
    `;
}