import { defineComponent } from 'vue'

import Image1 from '@/assets/images/1.webp'
import Image2 from '@/assets/images/2.webp'

export default defineComponent({
  name: 'HomeModule',

  data(){
    return {
      image_1: Image1,
      image_2: Image2,

      is_clicked: false
    }
  },

  render(){
    return (
      <main>
        {
          !this.$data.is_clicked ? (
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4">
              <img
                class="max-w-[300px] max-h-[300px] object-cover rounded"
                src={this.$data.image_1}
                alt="cat"/>

                <div class="text-center">
                  <h1 class="font-[500] text-[1.4rem] text-orange-800">
                    Ардо, приготовишь мне вкусную еду? 🥹 🩵
                  </h1>
                </div>

                <div class="flex flex-nowrap items-center justify-center gap-6">
                  <button class="font-[500] text-[1.2rem] text-slate-800 px-6 py-2 bg-white border border-orange-800 rounded shadow-md" onClick={() => this.$data.is_clicked = true}>
                    Да 😇
                  </button>
                    
                  <button class="font-[500] text-[1.2rem] text-slate-800 px-6 py-2 bg-white border border-orange-800 rounded shadow-md hover:opacity-0 focus:opacity-0 duration-300 cursor-default">
                    Нет 🥺
                  </button>
                </div>
            </div>
          ) : (
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4">
              <img
                class="max-w-[300px] max-h-[300px] object-cover rounded"
                src={this.$data.image_2}
                alt="cat"/>

                <div class="text-center">
                  <h1 class="font-[500] text-[1.4rem] text-orange-800">
                    Ураааа 🥰 ✨ 🎉
                  </h1>
                </div>
            </div>
          )
        }
      </main>
    )
  }
})