import { Increment } from '@/components/increment'
import { Navigation } from '@/components/navigation'
import { StarRating } from '@/components/star-rating'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'

import { Favorite } from '../favorite'

export function ProductInfo () {
  return (
    <div className="flex w-[1140px] flex-col items-start">
      <Navigation />
      <div className="mt-4 flex w-full flex-row justify-between">
        <img
          src=""
          alt=""
          className="h-[555px] w-[555px] bg-zinc-500 bg-cover"
        />
        <div className="flex h-[555px] w-[545px] flex-col items-start justify-center">
          <div className="flex w-full flex-row items-center justify-between">
            <h1 className="text-2xl font-bold">Lorem ipsum</h1>
            <Badge
              variant="secondary"
              className="rounded-md bg-green-100 text-green-600"
            >
              No estoque
            </Badge>
          </div>
          <h6 className="mt-2 text-xl">Lorem ipsum dollar amset</h6>
          <div className="mt-2 flex flex-row">
            <StarRating rating={5} totalStars={5} />
            <span className="ml-2 text-zinc-500">5.0 (120 visualizações)</span>
          </div>
          <div className="mt-2">
            <span className="text-lg font-normal">R$ 80,00</span>
            <span className="ml-2 text-lg text-zinc-500 line-through">
              R$ 200,00
            </span>
          </div>
          <p className="mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            nesciunt maxime tempore sapiente. Labore eum tempore explicabo,
            officiis sed eos. Nam quas ducimus nostrum odit repellendus eum
            laboriosam inventore tenetur.
          </p>
          <div className="mt-4">
            <strong>Cor</strong>
            <div className="mt-2 flex flex-row gap-x-[10px]">
              {Array.from({ length: 5 }).map((_, index) => {
                return (
                  <div
                    key={index}
                    className="h-[36px] w-[36px] rounded bg-zinc-400"
                  ></div>
                )
              })}
            </div>
          </div>
          <div className="mt-4">
            <strong>Tamanho</strong>
            <div className="mt-2 flex flex-row gap-x-[10px]">
              {Array.from({ length: 5 }).map((_, index) => {
                return (
                  <div
                    key={index}
                    className="h-[36px] w-[36px] rounded bg-zinc-400"
                  ></div>
                )
              })}
            </div>
          </div>
          <div className="mt-11 flex w-full gap-[20px]">
            <Increment />
            <Button className="w-[339px] bg-zinc-950 p-6">
              Adicionar no carrinho
            </Button>
            <Favorite />
          </div>
        </div>
      </div>
      <div className="mt-4 flex w-full flex-row flex-wrap justify-start gap-x-[20px]">
        {Array.from({ length: 8 }).map((_, index) => {
          return (
            <img
              key={index}
              src=""
              alt=""
              className="h-[125px] w-[125px] bg-zinc-500"
            />
          )
        })}
      </div>

      <Tabs defaultValue="descriptions" className="m-0 mt-7 w-full p-0">
        <TabsList className="m-0 mb-3 flex w-full flex-row justify-start gap-6 rounded-none border-b-[1px] bg-transparent p-0">
          <TabsTrigger
            value="descriptions"
            className="m-0 h-full rounded-none p-0 text-lg visited:text-foreground focus:h-[43px] focus:border-b-[3px] focus:border-b-zinc-900 disabled:text-muted-foreground"
          >
            Descrição
          </TabsTrigger>
          <TabsTrigger
            value="additionalInformation"
            className="m-0 h-full rounded-none p-0 text-lg visited:text-foreground focus:h-[43px] focus:border-b-[3px] focus:border-b-zinc-900 disabled:text-muted-foreground"
          >
            Informações Adicionais
          </TabsTrigger>
          <TabsTrigger
            value="review"
            className="m-0 h-full rounded-none p-0 text-lg visited:text-foreground focus:h-[43px] focus:border-b-[3px] focus:border-b-zinc-900 disabled:text-muted-foreground"
          >
            Reviews
          </TabsTrigger>
          <TabsTrigger
            value="comment"
            className="m-0 h-full rounded-none p-0 text-lg visited:text-foreground focus:h-[43px] focus:border-b-[3px] focus:border-b-zinc-900 disabled:text-muted-foreground"
          >
            Comentar
          </TabsTrigger>
        </TabsList>
        <TabsContent value="descriptions" className="m-0 p-0">
          <div className="border-b-[2px] border-b-zinc-100 pb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            quo cumque odit, nobis amet ab voluptatibus quas, animi expedita
            laborum modi atque laudantium sapiente. Itaque perferendis optio
            placeat est repudiandae.
          </div>
        </TabsContent>
        <TabsContent value="additionalInformation" className="m-0 p-0">
          <div className="border-b-[2px] border-b-zinc-100 pb-4">
            <div className="flex flex-row gap-5">
              <strong>Cor</strong>
              <p>Red, Green, Orange</p>
            </div>
            <div className="mt-2 flex flex-row gap-5">
              <strong>Size</strong>
              <p>S, M, L, XL, XXL</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="review">
          <div className="mt-5">
            <strong className="">Comentários dos consumidores</strong>
            <div className="mt-2">
              {Array.from({ length: 5 }).map((_, index) => {
                return (
                  <div
                    key={index}
                    className="border-b-[1px] border-b-zinc-200 py-4"
                  >
                    <div className="mb-3 flex flex-row gap-4">
                      <img src="" alt="" className="h-[50px] w-[50px]" />
                      <div className="flex flex-col">
                        <p>John Doe</p>
                        <StarRating rating={5} totalStars={5} />
                      </div>
                    </div>

                    <strong>Commento titulum</strong>

                    <p className="mb-3 mt-2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Deserunt possimus eius nulla harum tempore facilis
                      voluptas et ipsa animi beatae! Repellat iste expedita
                      sapiente, nihil laborum fugit eveniet esse harum.
                    </p>

                    <span className="text-zinc-400">
                      Posted on Jone 05, 2023
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="comment">
          <div className="mt-5">
            <strong>Adicionar seu comentário</strong>
            <form action="" className="mt-6">
              <div className="">
                <Label>Sua nota</Label>
                <RadioGroup
                  defaultValue="option-one"
                  className="mt-1 flex flex-row"
                >
                  <div className="flex items-center">
                    <RadioGroupItem
                      value="1"
                      id="1"
                      className="h-0 w-0 border-none bg-transparent"
                    />
                    <Label htmlFor="1">
                      <StarRating
                        disabledColorStars="text-zinc-200"
                        colorStars="text-yellow-500"
                        rating={0}
                        totalStars={1}
                      />
                    </Label>
                  </div>
                  <Separator
                    orientation="vertical"
                    className="h-6 bg-zinc-200"
                  />
                  <div className="flex items-center">
                    <RadioGroupItem
                      value="2"
                      id="2"
                      className="h-0 w-0 border-none bg-transparent"
                    />
                    <Label htmlFor="2">
                      <StarRating
                        disabledColorStars="text-zinc-200"
                        colorStars="text-yellow-500"
                        rating={0}
                        totalStars={2}
                      />
                    </Label>
                  </div>
                  <Separator
                    orientation="vertical"
                    className="h-6 bg-zinc-200"
                  />
                  <div className="flex items-center">
                    <RadioGroupItem
                      value="3"
                      id="3"
                      className="h-0 w-0 border-none bg-transparent"
                    />
                    <Label htmlFor="3">
                      <StarRating
                        disabledColorStars="text-zinc-200"
                        colorStars="text-yellow-500"
                        rating={0}
                        totalStars={3}
                      />
                    </Label>
                  </div>
                  <Separator
                    orientation="vertical"
                    className="h-6 bg-zinc-200"
                  />
                  <div className="flex items-center">
                    <RadioGroupItem
                      value="4"
                      id="4"
                      className="h-0 w-0 border-none bg-transparent"
                    />
                    <Label htmlFor="4">
                      <StarRating
                        disabledColorStars="text-zinc-200"
                        colorStars="text-yellow-500"
                        rating={0}
                        totalStars={4}
                      />
                    </Label>
                  </div>
                  <Separator
                    orientation="vertical"
                    className="h-6 bg-zinc-200"
                  />
                  <div className="flex items-center">
                    <RadioGroupItem
                      value="5"
                      id="5"
                      className="h-0 w-0 border-none bg-transparent"
                    />
                    <Label htmlFor="5">
                      <StarRating
                        disabledColorStars="text-zinc-200"
                        colorStars="text-yellow-500"
                        rating={0}
                        totalStars={5}
                      />
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="my-4">
                <Label htmlFor="name">Seu nome</Label>
                <Input id="name" name="name" className="mt-1" />
              </div>
              <div className="">
                <Label htmlFor="email">Seu e-mail</Label>
                <Input id="email" name="email" className="mt-1" />
              </div>
              <div className="my-4">
                <Label htmlFor="comment">Seu comentário</Label>
                <Textarea id="comment" name="comment" className="mt-1" />
              </div>
              <Button>Enviar</Button>
            </form>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
