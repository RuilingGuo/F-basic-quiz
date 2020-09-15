export const userInfoBinder = (name, age) =>
        `Hello, 
            <br/>
         MY NAME IS ${name} ${age}YO AND THIS IS MY RESUME`;

export const educationItemBinder = (year, title, description) =>
    `
          <li class="eductions-item">
            <div class="eductions-item-content">
              <div class="item-content-year">
                <h2>${year}</h2>
              </div>
              <div class="item-content-description">
                <h3>${title}</h3>
                <p>
                  ${description}
                </p>
              </div>
            </div>
          </li>
    `;