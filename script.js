let count = 0;
      let lastbutton = document.getElementById("btn");

      function createbtn() {
        const newbutton = document.createElement("button");
        newbutton.innerText = "click";
        newbutton.className = "btn1";

        newbutton.onclick = function () {
          count++;
          this.innerText = count;
          if (count % 5 == 0) {
            this.innerText = "buzz";
          }
          createbtn();
        };
        lastbutton.disabled = true;
        document.body.appendChild(newbutton);
        lastbutton = newbutton;
      }
      lastbutton.onclick = function () {
        count++;
        this.innerText = count;
        createbtn();
      };