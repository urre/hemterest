     const deepTask = () => {
        if(window.location.hash) {

            setTimeout(() => {
                let list = parseInt(location.hash.split('list=')[1].substring(0, 1))
                let task = parseInt(location.hash.split('task=')[1].substring(0, 1))

                const checklist = document.querySelectorAll('.checklist')[list-1]
                const checkListTaskList = checklist.getElementsByClassName('js-checklist-items-list')[0]

                const checkListTask = checkListTaskList.getElementsByClassName('checklist-item')[task-1]
                checkListTask.classList.add('deeptask-active')
            }, 2000)

        }
    }

    if ('onhashchange' in window) {
        window.onhashchange = deepTask
    }

    window.onload = function() {
        deepTask()
    }