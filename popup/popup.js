console.log("MutationObserver:Start");

const onMutation = (mutations) => {
  // mo.disconnect();
  for (const { addedNodes } of mutations) {
    for (const node of addedNodes) {
      if (node) {
        if (node.dataset && node.dataset.testid) {
          // console.log("node.dataset.testid=" + node.dataset.testid)
          if (node.dataset.testid == "cellInnerDiv") {
            const users = node.querySelectorAll("[data-testid='User-Name']");
            for (const user of users){
                const verified = user.querySelectorAll("[data-testid='icon-verified']")
                if (verified.length > 0) {
                    let list = Array.from(verified[0].classList)
                    if (list.includes("r-1cvl2hr")){
                        console.log(user.textContent);
                        const caret = node.querySelectorAll("[data-testid='caret']");
                        caret[0].click();
                        const block = document.querySelectorAll("[data-testid='block']");
                        console.log(block);
                        block[0].click();
                        const confirm = document.querySelectorAll("[data-testid='confirmationSheetConfirm']");
                        confirm[0].click();
                        caret[0].click();
                    }
                }
            }
          }
        }
      }
    }
  }
  // observe();
}

const observe = () => {
  mo.observe(document, {
    subtree: true,
    childList: true,
  });
}

const disconnect = () => {
    mo.disconnect();
    console.log("Observer dissconected")
}

const mo = new MutationObserver(onMutation);

observe();